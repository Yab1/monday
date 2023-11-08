import { signOut } from "firebase/auth";
import { call, fork, put, takeLatest } from "redux-saga/effects";
import {
  progressStart,
  progressSuccess,
  progressFailure,
  authenticate,
} from "@/redux/slices";
import { FirebaseError } from "firebase/app";
import { auth } from "@/firebase";
import { SagaActions } from "@/enum";

async function callSignOut() {
  try {
    await signOut(auth);
  } catch (error) {
    throw error;
  }
}

function handleFirebaseError(code: string): string {
  switch (code) {
    case "auth/internal-error":
      return "Network request failed. Please check your internet connection and try again.";
    default:
      return "An error occurred. Please try again later.";
  }
}

function* logOut() {
  try {
    yield put(progressStart());
    yield call(callSignOut);
    yield put(progressSuccess());
    yield put(authenticate(false));
  } catch (error) {
    if (error instanceof FirebaseError) {
      const errorMessage: string = yield call(handleFirebaseError, error.code);
      yield put(progressFailure(errorMessage));
    }
  }
}

function* watchLogout() {
  yield takeLatest(SagaActions.LOG_OUT, logOut);
}

const logOutSaga = [fork(watchLogout)];

export default logOutSaga;
