import { createAsyncThunk } from "@reduxjs/toolkit";
import { doc, getDoc, setDoc } from "firebase/firestore";
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
      const userDoc = doc(db, "users", user.uid);

      const userDocSnapshot = await getDoc(userDoc);

      if (userDocSnapshot.exists()) {
        dispatch(readUser({ userID: user.uid }));
      } else {
        const newUserData: IUserData = generateUserData(user);
        await setDoc(userDoc, newUserData);
        const settingsDoc = doc(db, "users", user.uid, "settings", user.uid);
        const settingsDocSnapshot = await getDoc(settingsDoc);

        if (!settingsDocSnapshot.exists()) {
          const userSettings: IUserSettings = generateUserSettings();
          await setDoc(settingsDoc, userSettings);
        }
      }
    } catch (error) {
      alert(`Error creating user and settings ${error}`);
      throw error;
    }
  }
);

export default createUser;
