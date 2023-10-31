import { object, string } from "yup";

const taskSchema = object({
  title: string()
    .required("Task title is required")
    .min(6, "Task title must be at least 6 characters")
    .max(80, "Task title must be at most 80 characters"),
});

export default taskSchema;
