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
import {
  progressSuccess,
  progressFailure,
  setUser,
  authenticate,
} from "@/redux/slices";
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
    return () => unsubscribe();
  });
}

interface ICustomEventChannel
  extends EventChannel<QuerySnapshot<IUser> | FirebaseError> {
  close: () => void;
}

function* readUserSaga(userId: string) {
  const userRef: DocumentReference = doc(db, "users", userId);

  const channel: ICustomEventChannel = yield call(
    createUserSagaDataChannel,
    userRef
  );

  try {
    while (true) {
      const data: IUser | FirebaseError = yield take(channel);

      if (data instanceof FirebaseError) {
        yield put(progressFailure(data.code));
      } else {
        yield put(setUser(data));
        yield put(authenticate(true));
        yield put(progressSuccess());
      }
      yield cancel();
    }
  } catch (error) {
    if (error instanceof FirebaseError) {
      const errorMessage: string = yield call(deriveFirestoreError, error.code);
      yield put(progressFailure(errorMessage));
    }
  } finally {
    if (channel) channel.close();
  }
}

export default readUserSaga;
