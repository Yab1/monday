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

export interface IProject extends IProjectMetaData {
  groups: IBatchMetaData[];
}

export type status = "idle" | "loading" | "succeeded" | "failed";

export interface IProjectState {
  projects: IProject[];
  selectedProject: IProject;
  status: status;
  error: unknown;
}
