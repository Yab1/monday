import { UserRoleEnum } from "@/enum";

interface IAccessControl {
  project: string;
  user: string;
  role: UserRoleEnum;
}

export default IAccessControl;
