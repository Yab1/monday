import { Status } from "@/enum";
import { IPrivateData, IUser } from "./index";
export interface IAuthState {
  user: IUser;
  authenticated: boolean;
  status: Status;
  error: unknown;
  privateData: IPrivateData;
}
