import { createSlice } from "@reduxjs/toolkit";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   sendEmailVerification,
//   UserCredential,
// } from "firebase/auth";
// import { app } from "@/firebase";
import { IAuthState } from "@/interfaces";

// const auth = getAuth();

const initialState: IAuthState = {
  user: null,
  authenticated: false,
  status: "idle",
  error: null,
};

// export const signUpWithEmailPassword = createAsyncThunk(
//   "auth/signup",
//   async (userData: ISignUpData) => {
//     try {
//       const userCredential: UserCredential =
//         await createUserWithEmailAndPassword(
//           auth,
//           userData.email,
//           userData.password
//         );
//       await sendEmailVerification(userCredential.user);
//     } catch (error: unknown) {
//       throw error;
//     }
//   }
// );

// export const signInWithEmailPassword = createAsyncThunk(
//   "auth/signup",
//   async (userData: ISignInData) => {
//     try {
//       const userCredential: UserCredential = await signInWithEmailAndPassword(
//         auth,
//         userData.email,
//         userData.password
//       );
//       return userCredential.user;
//     } catch (error: unknown) {
//       throw error;
//     }
//   }
// );

// export const signUpWithGoogle = createAsyncThunk(
//   "auth/signup",
//   async (userData: ISignUpData) => {
//     try {
//       const userCredential: UserCredential =
//         await createUserWithEmailAndPassword(
//           auth,
//           userData.email,
//           userData.password
//         );
//       await sendEmailVerification(userCredential.user);
//       return userCredential.user;
//     } catch (error: unknown) {
//       throw error;
//     }
//   }
// );

// export const signInWithGoogle = createAsyncThunk(
//   "auth/signup",
//   async (userData: ISignUpData) => {
//     try {
//       const userCredential: UserCredential =
//         await createUserWithEmailAndPassword(
//           auth,
//           userData.email,
//           userData.password
//         );
//       await sendEmailVerification(userCredential.user);
//       return userCredential.user;
//     } catch (error: unknown) {
//       throw error;
//     }
//   }
// );

// export const resetPassword = createAsyncThunk(
//   "auth/signup",
//   async (userData: ISignUpData) => {
//     try {
//       const userCredential: UserCredential =
//         await createUserWithEmailAndPassword(
//           auth,
//           userData.email,
//           userData.password
//         );
//       await sendEmailVerification(userCredential.user);
//       return userCredential.user;
//     } catch (error: unknown) {
//       throw error;
//     }
//   }
// );

// export const forgotPassword = createAsyncThunk(
//   "auth/signup",
//   async (userData: ISignUpData) => {
//     try {
//       const userCredential: UserCredential =
//         await createUserWithEmailAndPassword(
//           auth,
//           userData.email,
//           userData.password
//         );
//       await sendEmailVerification(userCredential.user);
//       return userCredential.user;
//     } catch (error: unknown) {
//       throw error;
//     }
//   }
// );

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  // extraReducers(builder) {
  //   builder
  //     .addCase(signUpWithEmailPassword.pending, (state) => {
  //       state.status = "loading";
  //     })
  //     .addCase(signUpWithEmailPassword.fulfilled, (state, _) => {
  //       state.status = "succeeded";
  //       state.authenticated = true;
  //       state.error = null;
  //     })
  //     .addCase(signUpWithEmailPassword.rejected, (state, action) => {
  //       state.status = "failed";
  //       state.error = action.error.message;
  //     });
  // },
});

export default authSlice.reducer;
