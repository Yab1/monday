import { UserRoleEnum } from "@/enum";

export interface IAccessControl {
  name: string;
  photoURL: string;
  role: UserRoleEnum;
}

export interface IAccessControlState extends IAccessControl {
  id: string;
}
