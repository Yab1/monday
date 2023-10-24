import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Input, Button, Typography, Checkbox } from "@material-tailwind/react";
import { FcGoogle } from "react-icons/fc";
import { useFormik } from "formik";
import { signInSchema } from "../schema";
import {
  signInWithEmailPassword,
  resetState,
  signUpWithGoogle,
} from "@/slices";
import { useAppSelector, useAppDispatch } from "@/hooks";

export function SignIn() {
  const { status } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signInSchema,
    onSubmit: (values) => {
      dispatch(resetState());
      const userData = { email: values.email, password: values.password };
      dispatch(signInWithEmailPassword(userData));
    },
  });

  return (
    <Fragment>
      <Typography
        variant="h4"
        className="text-3xl font-medium font-poppins text-extremely-dark-gray"
      >
        Welcome back
      </Typography>
      <Typography className="text-sm font-poppins text-dark-gray">
        Welcome back! Please enter your details.
      </Typography>
      <form
        className="max-w-screen-lg mt-8 mb-2 w-80 sm:w-96"
        onSubmit={formik.handleSubmit}
      >
        <div className="relative flex flex-col gap-6 mb-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Email
          </Typography>
          <Input
            crossOrigin={undefined}
            id="email"
            size="lg"
            type="email"
            placeholder="Enter your email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            className={
              formik.touched.email && formik.errors.email
                ? "!border-red-600 !focus:!border-red-600"
                : "!border-t-blue-gray-200 focus:!border-t-gray-900"
            }
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          {formik.touched.email && formik.errors.email && (
            <Typography
              variant="small"
              color="red"
              className="absolute ml-3 text-xs -bottom-4"
            >
              {formik.errors.email}
            </Typography>
          )}
        </div>

        <div className="relative flex flex-col gap-6 mb-5">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            crossOrigin={undefined}
            id="password"
            size="lg"
            type="password"
            autoComplete="new-password"
            placeholder="Enter your password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            className={
              formik.touched.password && formik.errors.password
                ? "!border-red-600 !focus:!border-red-600"
                : "!border-t-blue-gray-200 focus:!border-t-gray-900"
            }
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          {formik.touched.password && formik.errors.password && (
            <Typography
              variant="small"
              color="red"
              className="absolute ml-3 text-xs -bottom-4"
            >
              {formik.errors.password}
            </Typography>
          )}
        </div>

        <div className="flex items-center justify-between">
          <Checkbox
            crossOrigin={undefined}
            color="blue"
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                Remember Me
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />

          <Link to="/auth/reset-prompt">
            <Typography
              as="span"
              variant="small"
              color="blue"
              className="ml-px font-bold"
            >
              Forgot password
            </Typography>
          </Link>
        </div>

        <Button
          type="submit"
          fullWidth
          color="blue"
          variant="gradient"
          className="mt-6"
          disabled={status === "loading" ? true : false}
        >
          sign in
        </Button>
        <Button
          size="sm"
          fullWidth
          variant="outlined"
          color="blue"
          className="flex items-center justify-center gap-2 mt-6 "
          onClick={() => dispatch(signUpWithGoogle())}
        >
          <FcGoogle size={25} />
          Sign in with Google
        </Button>
        <Typography
          color="gray"
          className="flex items-center justify-center gap-2 mt-4 font-normal text-center"
        >
          Don't have an account?{" "}
          <Link to="/auth/sign-up">
            <Typography
              as="span"
              variant="small"
              color="blue"
              className="ml-px font-bold"
            >
              Sign up
            </Typography>
          </Link>
        </Typography>
      </form>
    </Fragment>
  );
}

SignIn.displayName = "/src/features/auth/pages/SignInForm.tsx";

export default SignIn;
