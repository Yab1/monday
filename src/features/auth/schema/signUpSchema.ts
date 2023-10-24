import { object, string } from "yup";

const signUpSchema = object({
  name: string()
    .required("Name is required")
    .min(4, "Name must be at least 4 characters")
    .max(30, "Name must be at most 30 characters"),
  email: string().required("Email is required").email("Invalid email format"),
  password: string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must be at most 20 characters"),
});

export default signUpSchema;
