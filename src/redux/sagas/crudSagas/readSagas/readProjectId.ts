import {
  DocumentReference,
  QuerySnapshot,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { FirebaseError } from "firebase/app";
import { all, call, put, race, take } from "redux-saga/effects";
import { EventChannel, eventChannel } from "redux-saga";
import { db } from "@/firebase";
import { firestoreFailure, firestoreStart, updateBuffer } from "@/redux/slices";
import { deriveFirestoreError } from "@/function";
import { BufferEnum, SagaActions } from "@/enum";

function createProjectIdChannel(privateDataRef: DocumentReference) {
  return eventChannel((emitter) => {
    const unsubscribe = onSnapshot(
      privateDataRef,
      { includeMetadataChanges: true },
      (doc: any) => {
        emitter(doc.data().projectIds);
      },
      (error) => {
        emitter(new FirebaseError(error.code, error.message));
      }
    );
    return unsubscribe;
  });
}

function* readPrivateDataSaga(userId: string) {
  const projectsRef: DocumentReference = doc(
    db,
    "users",
    userId,
    "privateData",
    "projects"
  );

  const channel: EventChannel<QuerySnapshot<string[]> | FirebaseError> =
    yield call(createProjectIdChannel, projectsRef);

  try {
    while (true) {
      const { projectIds, cancel } = yield race({
        projectIds: take(channel),
        cancel: take(SagaActions.CANCEL_SAGA),
      });

      if (cancel) break;

      if (projectIds instanceof FirebaseError) {
        yield put(firestoreFailure(projectIds.code));
      } else {
        yield all([
          put(firestoreStart()),
          put(
            updateBuffer({
              bufferType: BufferEnum.PROJECT_BUFFER,
              fetched: projectIds,
            })
          ),
        ]);
      }
    }
  } catch (error) {
    if (error instanceof FirebaseError) {
      const errorMessage: string = yield call(deriveFirestoreError, error.code);
      yield put(firestoreFailure(errorMessage));
    }
  } finally {
    if (channel) channel.close();
  }
}

export default readPrivateDataSaga;
