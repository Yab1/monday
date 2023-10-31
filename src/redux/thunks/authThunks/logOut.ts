import { createAsyncThunk } from "@reduxjs/toolkit";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";

const logOut = createAsyncThunk("log-out", async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw error;
  }
});

export default logOut;
