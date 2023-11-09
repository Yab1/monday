import {
  DocumentSnapshot,
  collection,
  doc,
  getDoc,
  writeBatch,
} from "firebase/firestore";
import { User } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { call, put } from "redux-saga/effects";
import { db } from "@/firebase";
import { IUserData, IUserSettings } from "@/interfaces";
import { firestoreFailure } from "@/redux/slices";
import {
  deriveFirestoreError,
  generateUserData,
  generateUserSettings,
} from "@/function";

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

function* createUserSaga(user: User) {
  try {
    const userRef = doc(db, "users", user.uid);
    const userDocSnapshot: DocumentSnapshot = yield call(getDoc, userRef);

    if (userDocSnapshot.exists()) return;

    yield call(addUser, user);
  } catch (error) {
    if (error instanceof FirebaseError) {
      const errorMessage: string = yield call(deriveFirestoreError, error.code);
      yield put(firestoreFailure(errorMessage));
    }
  }
}

export default createUserSaga;
