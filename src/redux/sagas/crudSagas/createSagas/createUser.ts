import { collection, doc, getDoc, writeBatch } from "firebase/firestore";
import { User } from "firebase/auth";
import { db } from "@/firebase";
import { IUserData, IUserSettings } from "@/interfaces";
import generateUserData from "@/function/generateUserData";
import generateUserSettings from "@/function/generateUserSettings";
import { call, fork, put, takeLatest } from "redux-saga/effects";
import { FirebaseError } from "firebase/app";
import { progressStart, progressFailure } from "@/redux/slices";
import { SagaActions } from "@/enum";

async function addUser(user: User) {
  const userRef = doc(db, "users", user.uid);
  const privateDataRef = collection(userRef, "privateData");
  const settingsRef = doc(privateDataRef, "settings");
  const projectsRef = doc(privateDataRef, "projects");

  const batch = writeBatch(db);

  const newUserData: IUserData = generateUserData(user);
  batch.set(userRef, newUserData);

  const userSettings: IUserSettings = generateUserSettings();
  batch.set(settingsRef, userSettings);
  batch.set(projectsRef, {
    projectIds: [],
  });

  await batch.commit();
}

function handleFirebaseError(code: string): string {
  switch (code) {
    case "auth/internal-error":
      return "Network request failed. Please check your internet connection and try again.";
    default:
      return "An error occurred. Please try again later.";
  }
}

async function checkRecord(userId: string) {
  const userRef = doc(db, "users", userId);
  const userDocSnapshot = await getDoc(userRef);

  return userDocSnapshot.exists();
}

function* createUser(user: User) {
  try {
    const isRecordExist: boolean = yield call(checkRecord, user.uid);

    if (isRecordExist) return;
    yield put(progressStart());
    yield call(addUser, user);
  } catch (error) {
    if (error instanceof FirebaseError) {
      const errorMessage: string = yield call(handleFirebaseError, error.code);
      yield put(progressFailure(errorMessage));
    }
  }
}

export default createUser;
// function* watchCreateUser() {
//   yield takeLatest(SagaActions.CREATE_USER, createUser);
// }

// const createUserSaga = [fork(watchCreateUser)];

// export default createUserSaga;
