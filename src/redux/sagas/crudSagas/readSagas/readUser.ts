import { SagaActions } from "@/enum";
import { db } from "@/firebase";
import { IUser } from "@/interfaces";
import {
  DocumentReference,
  QuerySnapshot,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { call, fork, put, take, takeLatest } from "redux-saga/effects";
import { EventChannel, eventChannel } from "redux-saga";
import { FirebaseError } from "firebase/app";
import {
  progressStart,
  progressSuccess,
  progressFailure,
  setUser,
  authenticate,
} from "@/redux/slices";

function createUserDataChannel(userRef: DocumentReference) {
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

function* readUser(userId: string) {
  yield put(progressStart());

  const userRef: DocumentReference = doc(db, "users", userId);

  const channel: EventChannel<QuerySnapshot<IUser> | FirebaseError> =
    yield call(createUserDataChannel, userRef);

  try {
    while (true) {
      const data: IUser | FirebaseError = yield take(channel);

      if (data instanceof FirebaseError) {
        yield put(progressFailure(data.code));
      } else {
        yield put(setUser(data));
        yield put(progressSuccess());
        yield put(authenticate(true));
      }
    }
  } finally {
    channel.close();
  }
}

export default readUser;

// function* watchReadUser() {
//   yield takeLatest(SagaActions.READ_USER, readUser);
// }

// const readUserSaga = [fork(watchReadUser)];

// export default readUserSaga;
