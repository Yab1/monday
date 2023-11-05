import { IPrivateData, IUser, TStatus } from "./index";
export interface IAuthState {
  user: IUser;
  authenticated: boolean;
  status: TStatus;
  error: unknown;
  privateData: IPrivateData;
}
