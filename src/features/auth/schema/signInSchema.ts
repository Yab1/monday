import { object, string } from "yup";

const signInSchema = object({
  email: string()
    .required("Email is required")
    .email("Invalid email format")
    .test("is-gmail", "Email must be a Gmail address", (value) =>
      value.endsWith("@gmail.com")
    ),
  password: string()
    .required("Password is required")
    .min(4, "Password must be at least 4 characters")
    .max(20, "Password must be at most 20 characters"),
});

export default signInSchema;
