import { StatusEnum } from "@/enum";

export interface Task {
  id: string;
  title: string;
  category?: string;
  assignedTeamMembers: string[];
  dueDate: string;
  status: StatusEnum;
}

export interface Groups {
  id: string;
  groupName: string;
  isCollapsed: boolean;
  tasks: Task[];
}

export interface Project {
  id: string;
  label: string;
  status: StatusEnum;
  description: string;
  groups: Groups[];
}
