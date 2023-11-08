import { createAsyncThunk } from "@reduxjs/toolkit";
import { doc, addDoc, collection, setDoc } from "firebase/firestore";
import { IAccessControl, IProjectMetaData, IUser } from "@/interfaces";
import { db } from "@/firebase";
import { UserRoleEnum } from "@/enum";

const createProject = createAsyncThunk<
  void,
  { data: IProjectMetaData; user: IUser }
>("create-project", async ({ data, user }) => {
  try {
    const projectRef = collection(db, "projects");

    const docRef = await addDoc(projectRef, data);

    const accessControlRef = doc(
      projectRef,
      docRef.id,
      "accessControl",
      user.id
    );

    const accessControl: IAccessControl = {
      name: user.name,
      photoURL: user.photoURL,
      role: UserRoleEnum.Owner,
    };

    await setDoc(accessControlRef, accessControl);
  } catch (error) {
    throw error;
  }
});

export default createProject;
