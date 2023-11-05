import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, onSnapshot, where, query } from "firebase/firestore";
import { IAccessControl } from "@/interfaces";
import { db } from "@/firebase";
import { readProject } from "..";

const readAccessControl = createAsyncThunk<Function, string>(
  "read-access-control",
  async (userID, { dispatch }) => {
    try {
      const unSubscribe = onSnapshot(
        query(collection(db, "accessControl"), where("user", "==", userID)),
        (querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // dispatch(readProject(doc.data().project));
          });
        }
      );

      return () => unSubscribe;
    } catch (error) {
      throw error;
    }
  }
);

export default readAccessControl;
