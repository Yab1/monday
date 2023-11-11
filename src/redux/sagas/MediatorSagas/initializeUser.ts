import { SagaActions } from "@/enum";
import { all, call, fork, takeLatest } from "redux-saga/effects";
import {
  createUserSaga,
  readUserSaga,
  readSettingsSaga,
  readProjectId,
} from "@/redux/sagas/crudSagas";
import { User } from "firebase/auth";

function* initializeUserSaga(action: {
  type: SagaActions.INITIALIZE_USER;
  payload: User;
}) {
  const user = action.payload;

  yield all([
    call(createUserSaga, user),
    fork(readUserSaga, user.uid),
    fork(readSettingsSaga, user.uid),
    fork(readProjectId, user.uid),
  ]);
}

function* watchInitializeUser() {
  yield takeLatest(SagaActions.INITIALIZE_USER, initializeUserSaga);
}

const initializeUser = [fork(watchInitializeUser)];

export default initializeUser;
