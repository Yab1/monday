import { TaskStatusEnum, ProjectStatusEnum } from "@/enum";

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

export interface IProject {
  label: string;
  status: ProjectStatusEnum;
  description: string;
  timestamp: string;
  creator: string;
}

export type TStatus = "idle" | "loading" | "succeeded" | "failed";

export interface IProjectState {
  ownedProjects: (IProjectMetaData & { id: string })[];
  collaboratingProjects: (IProjectMetaData & { id: string })[];
  status: TStatus;
  error: unknown;
}
