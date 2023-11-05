import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authWithGoogle, logOut } from "@/redux/thunks/authThunks";
import {
  createUser,
  readPrivateData,
  readUser,
} from "@/redux/thunks/crudThunks";
import { IAuthState, IPrivateData, IUser, TStatus } from "@/interfaces";

const initialState: IAuthState = {
  user: {} as IUser,
  privateData: {} as IPrivateData,
  authenticated: false,
  status: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetState: () => initialState,
    updateStatus: (state, action: PayloadAction<TStatus>) => {
      state.status = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(createUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createUser.fulfilled, (state, _) => {
        state.error = null;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.status = "failed";
        console.log(action.error.code);
        // switch (action.error.code) {
        //   case "auth/email-already-in-use":
        //     state.error =
        //       "This email is already in use. Please sign in or use a different email.";
        //     break;
        //   case "auth/network-request-failed":
        //     state.error =
        //       "Network request failed. Please check your internet connection and try again.";
        //     break;
        //   default:
        //     state.error = "An error occurred. Please try again later.";
        // }
      })
      .addCase(readUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(readUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = null;
        state.user = action.payload;
        state.authenticated = true;
      })
      .addCase(readUser.rejected, (state, action) => {
        state.status = "failed";
        console.log(action.error.code);
        // switch (action.error.code) {
        //   case "auth/email-already-in-use":
        //     state.error =
        //       "This email is already in use. Please sign in or use a different email.";
        //     break;
        //   case "auth/network-request-failed":
        //     state.error =
        //       "Network request failed. Please check your internet connection and try again.";
        //     break;
        //   default:
        //     state.error = "An error occurred. Please try again later.";
        // }
      })
      .addCase(readPrivateData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(readPrivateData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = null;
        state.privateData = action.payload;
        state.authenticated = true;
      })
      .addCase(readPrivateData.rejected, (state, action) => {
        state.status = "failed";
        console.log(action.error.code);
        // switch (action.error.code) {
        //   case "auth/email-already-in-use":
        //     state.error =
        //       "This email is already in use. Please sign in or use a different email.";
        //     break;
        //   case "auth/network-request-failed":
        //     state.error =
        //       "Network request failed. Please check your internet connection and try again.";
        //     break;
        //   default:
        //     state.error = "An error occurred. Please try again later.";
        // }
      })
      .addCase(authWithGoogle.pending, (state) => {
        state.status = "loading";
      })
      .addCase(authWithGoogle.fulfilled, (state, _) => {
        state.error = null;
      })
      .addCase(authWithGoogle.rejected, (state, action) => {
        state.status = "failed";
        switch (action.error.code) {
          case "auth/internal-error":
            state.error =
              "Network request failed. Please check your internet connection and try again.";
            break;
          default:
            state.error = "An error occurred. Please try again later.";
        }
      })
      .addCase(logOut.pending, (state) => {
        state.status = "loading";
      })
      .addCase(logOut.fulfilled, (state, _) => {
        state.authenticated = false;
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.status = "failed";
        console.log(action.error.message);
        // switch (action.error.code) {
        //   case "auth/email-already-in-use":
        //     state.error =
        //       "This email is already in use. Please sign in or use a different email.";
        //     break;
        //   case "auth/network-request-failed":
        //     state.error =
        //       "Network request failed. Please check your internet connection and try again.";
        //     break;
        //   default:
        //     state.error = "An error occurred. Please try again later.";
        // }
      });
  },
});

export const { updateStatus, resetState } = authSlice.actions;
export default authSlice.reducer;
