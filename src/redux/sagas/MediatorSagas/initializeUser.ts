import { SagaActions } from "@/enum";
import { call, fork, takeLatest } from "redux-saga/effects";
import { createUser, readUser, readPrivateData } from "@/redux/sagas/crudSagas";
import { User } from "firebase/auth";

function* initializeUser(action: { type: string; payload: User }) {
  const user = action.payload;
  yield call(createUser, user);

  yield fork(readUser, user.uid);
  yield fork(readPrivateData, user.uid);
}

function* watchInitializeUser() {
  yield takeLatest(SagaActions.INITIALIZE_USER, initializeUser);
}

const initializeUserSaga = [fork(watchInitializeUser)];

export default initializeUserSaga;
