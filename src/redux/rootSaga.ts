import { all } from "redux-saga/effects";
import { authWithGoogleSaga, logOutSaga } from "./sagas/authSagas";
import { initializeUser } from "./sagas/MediatorSagas";
import { createProject } from "./sagas/crudSagas";

function* rootSaga() {
  yield all([
    ...authWithGoogleSaga,
    ...logOutSaga,
    ...initializeUser,
    ...createProject,
  ]);
}

export default rootSaga;
