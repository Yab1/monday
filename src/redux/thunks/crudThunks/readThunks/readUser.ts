import { db } from "@/firebase";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";

const readUser = createAsyncThunk("read-user", async (user: User) => {
  try {
    onSnapshot(doc(db, "users", user.uid), (doc) => {
      console.log("Current data: ", doc.data());
    });
  } catch (error) {
    throw error;
  }
});

export default readUser;
