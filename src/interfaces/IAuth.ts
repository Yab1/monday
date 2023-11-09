import { StatusEnum } from "@/enum";
import { IPrivateData, IUser } from "@/interfaces";
export interface IAuthState {
  authStatus: StatusEnum;
  authError: string | null;
  authenticated: boolean;
  user: IUser;
  privateData: IPrivateData;
}
