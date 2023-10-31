import { object, string } from "yup";

const authFormSchema = object({
  email: string().required("Email is required").email("Invalid email format"),
});

export default authFormSchema;
