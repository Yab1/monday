import { createSlice } from "@reduxjs/toolkit";
import { Project } from "@/interfaces";

const initialState: Project[] = [
  {
    id: "1",
    label: "Project 1",
    projectStatus: "In Progress",
    tasks: [
      {
        id: "1",
        title: "Task Description",
        assignedTeamMembers: ["Robel", "Abel"],
        dueDate: "23/04/18",
        taskStatus: "Pending",
      },
    ],
  },
];

export const projectSlice = createSlice({
  name: "projectSlice",
  initialState,
  reducers: {
    addProject: () => {},
    removeProject: () => {},
    updateProject: () => {},
    addTask: () => {},
    removeTask: () => {},
    updateTask: () => {},
  },
});

export const {
  addProject,
  addTask,
  removeProject,
  removeTask,
  updateProject,
  updateTask,
} = projectSlice.actions;
export default projectSlice.reducer;
