import { all } from "redux-saga/effects";
import { authWithGoogleSaga, logOutSaga } from "./sagas/authSagas";
import { initializeUser, initializeProject } from "./sagas/MediatorSagas";
import { createProject } from "./sagas/crudSagas";

function* rootSaga() {
  yield all([
    ...authWithGoogleSaga,
    ...logOutSaga,
    ...initializeUser,
    ...createProject,
    ...initializeProject,
  ]);
}

export default rootSaga;
