import {
  CollectionReference,
  QuerySnapshot,
  collection,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { FirebaseError } from "firebase/app";
import { call, cancel, put, take } from "redux-saga/effects";
import { EventChannel, eventChannel } from "redux-saga";
import { db } from "@/firebase";
import { IPrivateData, IUserSettings } from "@/interfaces";
import { firestoreFailure, setPrivateData } from "@/redux/slices";
import { deriveFirestoreError } from "@/function";

function createPrivateDataChannel(privateDataRef: CollectionReference) {
  return eventChannel((emitter) => {
    const unsubscribe = onSnapshot(
      privateDataRef,
      (snapshot: QuerySnapshot) => {
        let privateData: IPrivateData = {} as IPrivateData;
        snapshot.docChanges().forEach((change) => {
          if (change.doc.id === "settings") {
            privateData = {
              ...privateData,
              settings: { ...(change.doc.data() as IUserSettings) },
            };
          } else {
            privateData = {
              ...privateData,
              projectIds: change.doc.data().projectIds,
            };
          }
        });
        emitter(privateData);
      },
      (error) => {
        emitter(new FirebaseError(error.code, error.message));
      }
    );
    return unsubscribe;
  });
}

function* readPrivateDataSaga(userId: string) {
  const userRef = doc(db, "users", userId);
  const privateDataRef: CollectionReference = collection(
    userRef,
    "privateData"
  );

  const channel: EventChannel<QuerySnapshot<IPrivateData> | FirebaseError> =
    yield call(createPrivateDataChannel, privateDataRef);

  try {
    while (true) {
      const data: IPrivateData | FirebaseError = yield take(channel);

      if (data instanceof FirebaseError) {
        yield put(firestoreFailure(data.code));
      } else {
        yield put(setPrivateData(data));
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

export default readPrivateDataSaga;
