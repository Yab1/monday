import { UserRoleEnum } from "@/enum";

interface ProjectMember {
  project: string;
  user: string;
  role: UserRoleEnum;
}

export default ProjectMember;
