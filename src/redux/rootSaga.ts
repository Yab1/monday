import { all } from "redux-saga/effects";
import { watchAuthWithGoogle } from "./sagas/authSagas";

function* rootSaga() {
  yield all([watchAuthWithGoogle()]);
}

export default rootSaga;
