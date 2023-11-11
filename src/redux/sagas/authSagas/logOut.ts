import { signOut } from "firebase/auth";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import {
  authFailed,
  authIdle,
  cleanBuffer,
  firestoreIdle,
} from "@/redux/slices";
import { FirebaseError } from "firebase/app";
import { auth } from "@/firebase";
import { SagaActions } from "@/enum";
import { deriveAuthError } from "@/function";

function* logOut() {
  try {
    yield all([
      put({ type: SagaActions.CANCEL_SAGA }),
      call(signOut, auth),
      put(firestoreIdle()),
      put(cleanBuffer()),
      put(authIdle()),
    ]);
  } catch (error) {
    if (error instanceof FirebaseError) {
      const errorMessage: string = yield call(deriveAuthError, error.code);
      yield put(authFailed(errorMessage));
    }
  }
}

function* watchLogout() {
  yield takeLatest(SagaActions.LOG_OUT, logOut);
}

const logOutSaga = [fork(watchLogout)];

export default logOutSaga;
