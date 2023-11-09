import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { call, fork, put, takeLatest } from "redux-saga/effects";
import { progressStart, progressFailure } from "@/redux/slices";
import { FirebaseError } from "firebase/app";
import { auth } from "@/firebase";
import { SagaActions } from "@/enum";
import { deriveAuthError } from "@/function";

function* authWithGoogle() {
  try {
    yield put(progressStart());
    yield call(signInWithPopup, auth, new GoogleAuthProvider());
  } catch (error) {
    if (error instanceof FirebaseError) {
      const errorMessage: string = yield call(deriveAuthError, error.code);
      yield put(progressFailure(errorMessage));
    }
  }
}

function* watchAuthWithGoogle() {
  yield takeLatest(SagaActions.AUTH_WITH_GOOGLE, authWithGoogle);
}

const authWithGoogleSaga = [fork(watchAuthWithGoogle)];

export default authWithGoogleSaga;
