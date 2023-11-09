import { SagaActions } from "@/enum";
import { all, call, fork, takeLatest } from "redux-saga/effects";
import {
  createUserSaga,
  readUserSaga,
  readPrivateDataSaga,
} from "@/redux/sagas/crudSagas";
import { User } from "firebase/auth";

function* initializeUserSaga(action: { type: string; payload: User }) {
  const user = action.payload;

  yield all([
    call(createUserSaga, user),
    fork(readUserSaga, user.uid),
    fork(readPrivateDataSaga, user.uid),
  ]);
}

function* watchInitializeUser() {
  yield takeLatest(SagaActions.INITIALIZE_USER, initializeUserSaga);
}

const initializeUser = [fork(watchInitializeUser)];

export default initializeUser;
