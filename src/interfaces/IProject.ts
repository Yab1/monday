import { TaskStatusEnum, ProjectStatusEnum } from "@/enum";
import { IAccessControlState } from "./IAccessControl";

export interface ITask {
  title: string;
  dueDate: string;
  timestamp: string;
  status: TaskStatusEnum;
  creator: string;
  collaborators: string[];
}

export interface IBatchMetaData {
  label: string;
  timestamp: string;
  creator: string;
  tasks: ITask[];
}

export interface IProjectMetaData {
  label: string;
  status: ProjectStatusEnum;
  description: string;
  timestamp: string;
  creator: string;
}

export interface IProject extends IProjectMetaData {
  id: string;
  members: IAccessControlState[];
}

export type TStatus = "idle" | "loading" | "succeeded" | "failed";

export interface IProjectState {
  ownedProjects: IProject[];
  collaboratingProjects: IProject[];
  status: TStatus;
  error: unknown;
}
