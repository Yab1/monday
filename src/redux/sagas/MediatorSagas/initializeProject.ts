import { SagaActions } from "@/enum";
import { all, fork, takeLatest } from "redux-saga/effects";
import { readProjectSaga } from "../crudSagas";

function* initializeProjectSaga(action: {
  type: SagaActions.INITIALIZE_PROJECT;
  payload: string[];
}) {
  const projectIds = action.payload;

  for (let index in projectIds) {
    yield all([fork(readProjectSaga, projectIds[index])]);
  }
}

function* watchInitializeProject() {
  yield takeLatest(SagaActions.INITIALIZE_PROJECT, initializeProjectSaga);
}

const initializeProject = [fork(watchInitializeProject)];

export default initializeProject;
