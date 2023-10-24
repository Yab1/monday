import { object, string } from "yup";

const newPasswordSchema = object({
  password: string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must be at most 20 characters"),
  confirm: string().required("Please confirm your password"),
});

export default newPasswordSchema;
