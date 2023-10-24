import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  sendEmailVerification,
  UserCredential,
} from "firebase/auth";
import { app } from "@/firebase";
import { IAuthState, ISignInData, ISignUpData, status } from "@/interfaces";

const auth = getAuth(app);

const initialState: IAuthState = {
  user: null,
  authenticated: false,
  status: "idle",
  error: null,
};

export const signUpWithEmailPassword = createAsyncThunk(
  "auth/signup-email-password",
  async (userData: ISignUpData) => {
    try {
      const userCredential: UserCredential =
        await createUserWithEmailAndPassword(
          auth,
          userData.email,
          userData.password
        );
      await sendEmailVerification(userCredential.user);
    } catch (error: unknown) {
      throw error;
    }
  }
);

export const signUpWithGoogle = createAsyncThunk(
  "auth/signup-google",
  async () => {
    try {
      const response = await signInWithPopup(auth, new GoogleAuthProvider());
      console.log(response);
      return response.user;
    } catch (error: unknown) {
      throw error;
    }
  }
);

export const signInWithEmailPassword = createAsyncThunk(
  "auth/signup",
  async (userData: ISignInData) => {
    try {
      const userCredential: UserCredential = await signInWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );
      return userCredential.user;
    } catch (error: unknown) {
      throw error;
    }
  }
);

export const signInWithGoogle = createAsyncThunk(
  "auth/signup",
  async (userData: ISignUpData) => {
    try {
      const userCredential: UserCredential =
        await createUserWithEmailAndPassword(
          auth,
          userData.email,
          userData.password
        );
      await sendEmailVerification(userCredential.user);
      return userCredential.user;
    } catch (error: unknown) {
      throw error;
    }
  }
);

export const resetPassword = createAsyncThunk(
  "auth/signup",
  async (userData: ISignUpData) => {
    try {
      const userCredential: UserCredential =
        await createUserWithEmailAndPassword(
          auth,
          userData.email,
          userData.password
        );
      await sendEmailVerification(userCredential.user);
      return userCredential.user;
    } catch (error: unknown) {
      throw error;
    }
  }
);

export const forgotPassword = createAsyncThunk(
  "auth/signup",
  async (userData: ISignUpData) => {
    try {
      const userCredential: UserCredential =
        await createUserWithEmailAndPassword(
          auth,
          userData.email,
          userData.password
        );
      await sendEmailVerification(userCredential.user);
      return userCredential.user;
    } catch (error: unknown) {
      throw error;
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetState: () => initialState,
    authenticate: (state) => {
      state.authenticated = true;
    },
    updateStatus: (state, action: PayloadAction<status>) => {
      state.status = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(signUpWithEmailPassword.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signUpWithEmailPassword.fulfilled, (state, _) => {
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(signUpWithEmailPassword.rejected, (state, action) => {
        state.status = "failed";
        switch (action.error.code) {
          case "auth/email-already-in-use":
            state.error =
              "This email is already in use. Please sign in or use a different email.";
            break;
          case "auth/network-request-failed":
            state.error =
              "Network request failed. Please check your internet connection and try again.";
            break;
          default:
            state.error = "An error occurred. Please try again later.";
        }
      })
      .addCase(signInWithEmailPassword.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signInWithEmailPassword.fulfilled, (state, _) => {
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(signInWithEmailPassword.rejected, (state, action) => {
        console.log(action.error.code);
        state.status = "failed";
        switch (action.error.code) {
          case "auth/invalid-login-credentials":
            state.error =
              "Invalid email or password. Please double-check your login information.";
            break;
          case "auth/network-request-failed":
            state.error =
              "Network request failed. Please check your internet connection and try again.";
            break;
          default:
            state.error = "An error occurred. Please try again later.";
        }
      });
  },
});

export const { resetState, authenticate, updateStatus } = authSlice.actions;
export default authSlice.reducer;
