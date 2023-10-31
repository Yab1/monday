import { createAsyncThunk } from "@reduxjs/toolkit";
import { sendSignInLinkToEmail } from "firebase/auth";
import { auth } from "@/firebase";

const actionCodeSettings = {
  url: "http://localhost:5173/dashboard",
  handleCodeInApp: true,
};

const authWithEmailLink = createAsyncThunk(
  "auth/signup-email",
  async (email: string) => {
    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      window.localStorage.setItem("emailForSignIn", email);
    } catch (error: unknown) {
      console.log(error);
      throw error;
    }
  }
);

export default authWithEmailLink;
