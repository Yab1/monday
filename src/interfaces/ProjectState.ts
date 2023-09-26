export interface Task {
  id: string;
  title: string;
  category?: string;
  assignedTeamMembers: string[];
  dueDate: string;
  taskStatus: "Pending" | "Ready for Review" | "Completed";
}

export interface Project {
  id: string;
  label: string;
  projectStatus: "Pending" | "In Progress" | "Completed";
  tasks: Task[];
}
