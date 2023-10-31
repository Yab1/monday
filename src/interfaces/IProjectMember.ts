import { UserRoleEnum } from "@/enum";

interface IProjectMember {
  project: string;
  user: string;
  role: UserRoleEnum;
}

export default IProjectMember;
