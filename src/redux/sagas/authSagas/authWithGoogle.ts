import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { call, fork, put, takeLatest } from "redux-saga/effects";
import { progressStart, progressFailure } from "@/redux/slices";
import { FirebaseError } from "firebase/app";
import { auth } from "@/firebase";
import { SagaActions } from "@/enum";

function handleFirebaseError(code: string): string {
  switch (code) {
    case "auth/internal-error":
      return "Network request failed. Please check your internet connection and try again.";
    case "auth/popup-closed-by-user":
      return "The sign-in popup was closed. Please try signing in again.";
    default:
      return "An error occurred. Please try again later.";
  }
}

function* authWithGoogle() {
  try {
    yield put(progressStart());
    yield call(signInWithPopup, auth, new GoogleAuthProvider());
  } catch (error) {
    if (error instanceof FirebaseError) {
      const errorMessage: string = yield call(handleFirebaseError, error.code);
      yield put(progressFailure(errorMessage));
    }
  }
}

function* watchAuthWithGoogle() {
  yield takeLatest(SagaActions.AUTH_WITH_GOOGLE, authWithGoogle);
}

const authWithGoogleSaga = [fork(watchAuthWithGoogle)];

export default authWithGoogleSaga;
