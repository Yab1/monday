import { object, string } from "yup";

const groupSchema = object({
  groupName: string()
    .required("Group name is required")
    .min(4, "Group name must be at least 4 characters")
    .max(60, "Group name must be at most 60 characters"),
});

export default groupSchema;
