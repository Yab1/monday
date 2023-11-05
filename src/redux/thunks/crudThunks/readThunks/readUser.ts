import { createAsyncThunk } from "@reduxjs/toolkit";
import { doc, onSnapshot } from "firebase/firestore";
import { IUser } from "@/interfaces";
import { db } from "@/firebase";

const readUser = createAsyncThunk<IUser, string>(
  "read-user",
  async (userID) => {
    try {
      const userRef = doc(db, "users", userID);

      let userData: IUser = {} as IUser;

      const fetchUser = new Promise((resolve, _) => {
        onSnapshot(userRef, (doc) => {
          if (doc.exists()) {
            userData = {
              ...userData,
              ...doc.data(),
              id: doc.id,
            };
          }
        });
        resolve("User Data fetch successfully");
      });

      await Promise.all([fetchUser]);

      return userData;
    } catch (error) {
      throw error;
    }
  }
);

export default readUser;
