import {
  DocumentReference,
  QuerySnapshot,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { FirebaseError } from "firebase/app";
import { call, cancel, put, take } from "redux-saga/effects";
import { EventChannel, eventChannel } from "redux-saga";
import { db } from "@/firebase";
import { IUser } from "@/interfaces";
import { firestoreFailure, setUser } from "@/redux/slices";
import { deriveFirestoreError } from "@/function";

function createUserSagaDataChannel(userRef: DocumentReference) {
  return eventChannel((emitter) => {
    const unsubscribe = onSnapshot(
      userRef,
      (doc: any) => {
        const userData: IUser = {
          id: doc.id,
          ...doc.data(),
        };
        emitter(userData);
      },
      (error) => {
        emitter(new FirebaseError(error.code, error.message));
      }
    );
    return unsubscribe;
  });
}

function* readUserSaga(userId: string) {
  const userRef: DocumentReference = doc(db, "users", userId);

  const channel: EventChannel<QuerySnapshot<IUser> | FirebaseError> =
    yield call(createUserSagaDataChannel, userRef);

  try {
    while (true) {
      const data: IUser | FirebaseError = yield take(channel);

      if (data instanceof FirebaseError) {
        yield put(firestoreFailure(data.code));
      } else {
        yield put(setUser(data));
      }
      yield cancel();
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

export default readUserSaga;
