import { StatusEnum } from "@/enum";

export interface IAuthState {
  authStatus: StatusEnum;
  authError: string | null;
  authenticated: boolean;
}
