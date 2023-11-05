import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, doc, getDoc, writeBatch } from "firebase/firestore";
import { User } from "firebase/auth";
import { db } from "@/firebase";
import { IUserData, IUserSettings } from "@/interfaces";
import generateUserData from "@/function/generateUserData";
import generateUserSettings from "@/function/generateUserSettings";
import { readUser } from "@/redux/thunks/crudThunks";

const createUser = createAsyncThunk<void, { user: User }>(
  "create-user",
  async ({ user }, { dispatch }) => {
    try {
      const userRef = doc(db, "users", user.uid);

      const userDocSnapshot = await getDoc(userRef);

      if (!userDocSnapshot.exists()) {
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
    } catch (error) {
      alert(`Error creating user and settings ${error}`);
      throw error;
    }
  }
);

export default createUser;
