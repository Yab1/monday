import { signOut } from "firebase/auth";
import { call, fork, put, takeLatest } from "redux-saga/effects";
import {
  progressStart,
  progressSuccess,
  progressFailure,
  authenticate,
  resetAuthState,
} from "@/redux/slices";
import { FirebaseError } from "firebase/app";
import { auth } from "@/firebase";
import { SagaActions } from "@/enum";
import { deriveAuthError } from "@/function";

function* logOut() {
  try {
    yield put(progressStart());
    yield call(signOut, auth);

    yield put(authenticate(false));
    yield put(resetAuthState());
    yield put(progressSuccess());
  } catch (error) {
    if (error instanceof FirebaseError) {
      const errorMessage: string = yield call(deriveAuthError, error.code);
      yield put(progressFailure(errorMessage));
    }
  }
}

function* watchLogout() {
  yield takeLatest(SagaActions.LOG_OUT, logOut);
}

const logOutSaga = [fork(watchLogout)];

export default logOutSaga;
