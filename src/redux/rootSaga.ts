import { all } from "redux-saga/effects";
import { authWithGoogleSaga, logOutSaga } from "./sagas/authSagas";
import { initializeUserSaga } from "./sagas/MediatorSagas";

function* rootSaga() {
  yield all([...authWithGoogleSaga, ...logOutSaga, ...initializeUserSaga]);
}

export default rootSaga;
