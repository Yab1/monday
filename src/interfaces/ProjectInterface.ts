import { StatusEnum } from "@/enum";

export interface Task {
  id: string;
  title: string;
  category?: string;
  assignedTeamMembers: string[];
  dueDate: string;
  status: StatusEnum;
  creator: string;
}

export interface Groups {
  id: string;
  groupName: string;
  isCollapsed: boolean;
  timestamp: string;
  creator: string;
  tasks: Task[];
}

export interface Project {
  id: string;
  label: string;
  status: StatusEnum;
  description: string;
  timestamp: string;
  creator: string;
  groups: Groups[];
}
