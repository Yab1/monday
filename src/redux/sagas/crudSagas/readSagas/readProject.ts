import {
  CollectionReference,
  DocumentReference,
  DocumentSnapshot,
  QuerySnapshot,
  collection,
  doc,
  getDoc,
  onSnapshot,
} from "firebase/firestore";
import { FirebaseError } from "firebase/app";
import { all, call, cancel, put, take } from "redux-saga/effects";
import { EventChannel, eventChannel } from "redux-saga";
import { db } from "@/firebase";
import {
  IProjectMetaData,
  ITeamProjectData,
  IProject,
  IMember,
} from "@/interfaces";
import {
  firestoreFailure,
  firestoreSucceeded,
  setProjects,
} from "@/redux/slices";
import { deriveFirestoreError } from "@/function";

function createProjectChannel(projectsRef: DocumentReference) {
  return eventChannel((emitter) => {
    const unsubscribe = onSnapshot(
      projectsRef,
      (doc: any) => {
        const projectMetaData: IProjectMetaData & { id: string } = {
          id: doc.id,
          ...doc.data(),
        };
        emitter(projectMetaData);
      },
      (error) => {
        emitter(new FirebaseError(error.code, error.message));
      }
    );
    return unsubscribe;
  });
}

function createAccessControlChannel(
  accessControlRef: CollectionReference,
  projectId: string
) {
  return eventChannel((emitter) => {
    const unsubscribe = onSnapshot(
      accessControlRef,
      (snapshot: QuerySnapshot) => {
        const accessControl: ITeamProjectData = {
          projectId: projectId,
          members: [] as IMember[],
        };

        snapshot.docChanges().forEach((change) => {
          const member = { ...change.doc.data(), id: change.doc.id };
          accessControl.members.push(member as IMember);
        });

        emitter(accessControl);
      },
      (error) => {
        emitter(new FirebaseError(error.code, error.message));
      }
    );
    return unsubscribe;
  });
}

function* readProjectSaga(projectId: string) {
  const projectsRef: DocumentReference = doc(db, "projects", projectId);
  const userDocSnapshot: DocumentSnapshot = yield call(getDoc, projectsRef);

  if (userDocSnapshot.exists()) {
    const accessControlRef: CollectionReference = collection(
      projectsRef,
      "accessControl"
    );

    type CustomEventChannel<T> = EventChannel<QuerySnapshot<T> | FirebaseError>;

    type Channels = [
      CustomEventChannel<IProjectMetaData>,
      CustomEventChannel<ITeamProjectData>
    ];

    const [projectChannel, accessControlChannel]: Channels = yield all([
      call(createProjectChannel, projectsRef),
      call(createAccessControlChannel, accessControlRef, projectId),
    ]);

    try {
      while (true) {
        type Data<T> = T | FirebaseError;

        type Dates = [
          Data<IProjectMetaData & { id: string }>,
          Data<ITeamProjectData>
        ];

        const [projectMetaData, accessControl]: Dates = yield all([
          take(projectChannel),
          take(accessControlChannel),
        ]);

        if (
          !(projectMetaData instanceof FirebaseError) &&
          !(accessControl instanceof FirebaseError)
        ) {
          if (projectMetaData.id === accessControl.projectId) {
            const project: IProject = {
              ...projectMetaData,
              members: accessControl.members,
            };

            yield put(setProjects(project));
            yield put(firestoreSucceeded());
          }
        }

        if (projectMetaData instanceof FirebaseError) {
          yield put(firestoreFailure(projectMetaData.code));
        }

        if (accessControl instanceof FirebaseError) {
          yield put(firestoreFailure(accessControl.code));
        }

        yield cancel();
      }
    } catch (error) {
      if (error instanceof FirebaseError) {
        const errorMessage: string = yield call(
          deriveFirestoreError,
          error.code
        );
        yield put(firestoreFailure(errorMessage));
      }
    } finally {
      if (projectChannel) projectChannel.close();
      if (accessControlChannel) accessControlChannel.close();
    }
  }
}

export default readProjectSaga;
