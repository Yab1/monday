import {
  addDoc,
  collection,
  doc,
  getDoc,
  getFirestore,
} from "firebase/firestore";
import { IProjectMetaData, IBatchMetaData, IAccessControl } from "@/interfaces";
import { ActionEnum, TargetEnum, UserRoleEnum } from "@/enum";
import { app } from "@/firebase";

type ActionEnumFunction = (
  data?: IProjectMetaData | IBatchMetaData | IAccessControl,
  projectID?: string,
  batchID?: string,
  taskID?: string,
  userID?: string,
  role?: UserRoleEnum
) => void;

const db = getFirestore(app);

const alterDictionary: Record<
  TargetEnum,
  Record<ActionEnum, ActionEnumFunction>
> = {
  [TargetEnum.Project]: {
    [ActionEnum.CREATE]: async (data) => {
      const newProject = data as IProjectMetaData;
      const projectRef = await addDoc(collection(db, "projects"), newProject);
      const newProjectUserRelationship: IAccessControl = {
        project: projectRef.id,
        user: newProject.creator,
        role: UserRoleEnum.Owner,
      };
      const relationshipRef = await addDoc(
        collection(db, "accessControl"),
        newProjectUserRelationship
      );
    },
    [ActionEnum.READ]: async (_, projectID) => {
      const documentRef = doc(db, "projects", projectID as string);
      try {
        const documentSnapshot = await getDoc(documentRef);
        if (documentSnapshot.exists()) {
          const documentData = documentSnapshot.data();
          return documentData;
        } else {
          alert("Document does not exist");
        }
      } catch (error) {
        alert(error);
      }
    },
    [ActionEnum.UPDATE]: async () => {},
    [ActionEnum.DELETE]: async () => {},
  },
  [TargetEnum.Batch]: {
    [ActionEnum.CREATE]: async (data, projectID) => {
      const parentDocRef = doc(db, "projects", projectID as string);
      const subCollectionRef = collection(parentDocRef, "subCollection");
      return await addDoc(subCollectionRef, data);
    },
    [ActionEnum.READ]: async () => {},
    [ActionEnum.UPDATE]: async () => {},
    [ActionEnum.DELETE]: async () => {},
  },
  [TargetEnum.TASK]: {
    [ActionEnum.CREATE]: async () => {},
    [ActionEnum.READ]: async () => {},
    [ActionEnum.UPDATE]: async () => {},
    [ActionEnum.DELETE]: async () => {},
  },
  [TargetEnum.ACCESS_CONTROL]: {
    [ActionEnum.CREATE]: async (data) => {
      const newProject = data as IAccessControl;
      return await addDoc(collection(db, "accessControl"), newProject);
    },
    [ActionEnum.READ]: async () => {},
    [ActionEnum.UPDATE]: async () => {},
    [ActionEnum.DELETE]: async () => {},
  },
  [TargetEnum.USER]: {
    [ActionEnum.CREATE]: async () => {},
    [ActionEnum.READ]: async () => {},
    [ActionEnum.UPDATE]: async () => {},
    [ActionEnum.DELETE]: async () => {},
  },
};

export default alterDictionary;
