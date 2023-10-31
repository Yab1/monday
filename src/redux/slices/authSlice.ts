import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authWithGoogle, logOut } from "../thunks/authThunks";
import { IAuthState, status } from "@/interfaces";

const initialState: IAuthState = {
  // user: {} as IUser,
  authenticated: false,
  status: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authenticate: (state) => {
      state.authenticated = true;
    },
    updateStatus: (state, action: PayloadAction<status>) => {
      state.status = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(authWithGoogle.pending, (state) => {
        state.status = "loading";
      })
      .addCase(authWithGoogle.fulfilled, (state, _) => {
        state.status = "succeeded";
        state.authenticated = true;
        state.error = null;
      })
      .addCase(authWithGoogle.rejected, (state, action) => {
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

export const { authenticate, updateStatus } = authSlice.actions;
export default authSlice.reducer;
