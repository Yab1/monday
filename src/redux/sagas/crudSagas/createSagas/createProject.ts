import { collection, doc, writeBatch } from "firebase/firestore";
import { FirebaseError } from "firebase/app";
import { call, fork, put, takeEvery } from "redux-saga/effects";
import { db } from "@/firebase";
import { IAccessControl, IProjectMetaData, IUser } from "@/interfaces";
import { progressFailure } from "@/redux/slices";
import { SagaActions, UserRoleEnum } from "@/enum";
import { deriveFirestoreError } from "@/function";

async function addProject(data: IProjectMetaData, user: IUser) {
  const projectCollectionRef = collection(db, "projects");
  const projectRef = doc(projectCollectionRef);
  const accessControlRef = doc(
    projectCollectionRef,
    // projectRef,
    projectRef.id,
    "accessControl",
    user.id
  );

  const batch = writeBatch(db);

  batch.set(projectRef, data);

  const accessControl: IAccessControl = {
    name: user.name,
    photoURL: user.photoURL,
    role: UserRoleEnum.Owner,
  };
  batch.set(accessControlRef, accessControl);

  await batch.commit();

  try {
  } catch (error) {
    console.error(error);
    throw error;
  }
}

function* createProjectSaga(action: {
  type: SagaActions.CREATE_PROJECT;
  payload: { data: IProjectMetaData; user: IUser };
}) {
  try {
    const { data, user } = action.payload;
    yield call(addProject, data, user);
  } catch (error) {
    if (error instanceof FirebaseError) {
      const errorMessage: string = yield call(deriveFirestoreError, error.code);
      yield put(progressFailure(errorMessage));
    }
  }
}

function* watchCreateProject() {
  yield takeEvery(SagaActions.CREATE_PROJECT, createProjectSaga);
}

const createProject = [fork(watchCreateProject)];

export default createProject;
