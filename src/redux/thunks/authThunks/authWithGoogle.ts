import { createAsyncThunk } from "@reduxjs/toolkit";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/firebase";

const authWithGoogle = createAsyncThunk("auth/auth-with-google", async () => {
  try {
    await signInWithPopup(auth, new GoogleAuthProvider());
  } catch (error: unknown) {
    throw error;
  }
});

export default authWithGoogle;
