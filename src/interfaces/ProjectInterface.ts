import { TaskStatusEnum, ProjectStatusEnum } from "@/enum";
export interface Task {
  id: string;
  title: string;
  dueDate: string;
  timestamp: string;
  status: TaskStatusEnum;
  creator: string;
  collaborators: string[];
}

export interface Group {
  id: string;
  label: string;
  timestamp: string;
  creator: string;
  tasks: Task[];
}

export interface ProjectMetaData {
  id: string;
  label: string;
  status: ProjectStatusEnum;
  description: string;
  timestamp: string;
  creator: string;
}

export interface Project extends ProjectMetaData {
  groups: Group[];
}
