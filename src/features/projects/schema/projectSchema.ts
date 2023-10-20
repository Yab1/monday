import { object, string } from "yup";

const projectSchema = object({
  projectTitle: string()
    .required("Project title is required")
    .min(4, "Project title must be at least 4 characters")
    .max(60, "Project title must be at most 60 characters"),
  projectDescription: string().max(
    150,
    "Project description must be at most 150 characters"
  ),
});

export default projectSchema;
