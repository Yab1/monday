export interface Task {
  id: string;
  title: string;
  category?: string;
  assignedTeamMembers: string[];
  dueDate: string;
  status: "Pending" | "Ready for Review" | "Completed";
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
  status: "Pending" | "In Progress" | "Completed";
  description: string;
  groups: Groups[];
}
