import { StatusEnum } from "@/enum";
import { IPrivateData, IUser } from "@/interfaces";
export interface IAuthState {
  authenticated: boolean;
  user: IUser;
  privateData: IPrivateData;
  authStatus: StatusEnum;
}
