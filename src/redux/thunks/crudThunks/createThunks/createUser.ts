import { createAsyncThunk } from "@reduxjs/toolkit";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { User } from "firebase/auth";
import { db } from "@/firebase";
import { IUserData, IUserSettings } from "@/interfaces";
import generateUserData from "@/function/generateUserData";
import generateUserSettings from "@/function/generateUserSettings";

const createUser = createAsyncThunk("create-user", async (user: User) => {
  try {
    const userDoc = doc(db, "users", user.uid);
    const settingsDoc = doc(db, "users", user.uid, "settings", user.uid);
    console.log(settingsDoc);

    const userDocSnapshot = await getDoc(userDoc);
    const settingsDocSnapshot = await getDoc(settingsDoc);

    if (!userDocSnapshot.exists()) {
      const newUserData: IUserData = generateUserData(user);
      await setDoc(userDoc, newUserData);

      if (!settingsDocSnapshot.exists()) {
        const userSettings: IUserSettings = generateUserSettings();
        await setDoc(settingsDoc, userSettings);
      }
    }
    console.log(userDocSnapshot.exists());
  } catch (error) {
    alert(`Error creating user and settings ${error}`);
    throw error;
  }
});

export default createUser;
