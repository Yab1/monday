import { UserRoleEnum } from "@/enum";

export interface IAccessControl {
  name: string;
  photoURL: string;
  role: UserRoleEnum;
}

export interface IMember extends IAccessControl {
  id: string;
}

export interface ITeamProjectData {
  projectId: string;
  members: IMember[];
}
