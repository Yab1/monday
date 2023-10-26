import { IUser } from "./index";

export type status = "idle" | "loading" | "succeeded" | "failed";

export interface IAuthState {
  user: IUser;
  authenticated: boolean;
  status: status;
  error: unknown;
}

export interface ISignUpData {
  email: string;
  password: string;
  // name: string;
}

export interface ISignInData {
  email: string;
  password: string;
}
