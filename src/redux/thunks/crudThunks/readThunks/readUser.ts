import { db } from "@/firebase";
import { IUser } from "@/interfaces";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { doc, onSnapshot } from "firebase/firestore";

const readUser = createAsyncThunk<IUser, { userID: string }>(
  "read-user",
  async ({ userID }) => {
    try {
      let currentUser: IUser = {} as IUser;

      const fetchUser = new Promise((resolve, _) => {
        onSnapshot(doc(db, "users", userID), (doc) => {
          if (doc.exists()) {
            Object.assign(currentUser, { id: doc.id, ...doc.data() });
          }
        });
        resolve("User Data fetch successfully");
      });

      const fetchSetting = new Promise((resolve, _) => {
        onSnapshot(doc(db, "users", userID, "settings", userID), (doc) => {
          if (doc.exists()) {
            Object.assign(currentUser, { settings: { ...doc.data() } });
          }
          resolve("User Settings fetch successfully");
        });
      });

      await Promise.all([fetchUser, fetchSetting]);

      return currentUser;
    } catch (error) {
      throw error;
    }
  }
);

export default readUser;
