import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { call, put, takeLatest } from "redux-saga/effects";
import { authFailure, authStart, authSuccess } from "@/redux/slices";
import { auth } from "@/firebase";
import { FirebaseError } from "firebase/app";

async function googlePopup() {
  try {
    await signInWithPopup(auth, new GoogleAuthProvider());
  } catch (error) {
    throw error;
  }
}

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
    yield put(authStart());
    yield call(googlePopup);
    yield put(authSuccess());
  } catch (error) {
    if (error instanceof FirebaseError) {
      const errorMessage: string = yield call(handleFirebaseError, error.code);
      yield put(authFailure(errorMessage));
    }
  }
}

function* watchAuthWithGoogle() {
  yield takeLatest("auth/with-google", authWithGoogle);
}

export default watchAuthWithGoogle;
