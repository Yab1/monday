import { object, string } from "yup";

const resetSchema = object({
  email: string().required("Email is required").email("Invalid email format"),
});

export default resetSchema;
