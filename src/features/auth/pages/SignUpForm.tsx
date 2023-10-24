import { Fragment, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input, Button, Typography } from "@material-tailwind/react";
import { FcGoogle } from "react-icons/fc";
import { useFormik } from "formik";
import { signUpSchema } from "../schema";
import { signUpWithEmailPassword, signUpWithGoogle } from "@/slices";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { Loading } from "@/widgets";
import { resetState } from "@/slices";

export function SignUp() {
  const { status } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      dispatch(resetState());
      const userData = { email: values.email, password: values.password };
      dispatch(signUpWithEmailPassword(userData));
    },
  });

  useEffect(() => {
    if (status === "succeeded") {
      navigate("/auth/verification-prompt");
    }
  }, [status]);

  return (
    <Fragment>
      <Typography
        variant="h4"
        className="text-3xl font-medium font-poppins text-extremely-dark-gray"
      >
        Join Us Today
      </Typography>
      <Typography className="text-sm font-poppins text-dark-gray">
        Please enter your details to create an account.
      </Typography>
      <form
        className="max-w-screen-lg mt-8 mb-2 w-80 sm:w-96"
        onSubmit={formik.handleSubmit}
      >
        <div className="relative flex flex-col gap-6 mb-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Name
          </Typography>
          <Input
            crossOrigin={undefined}
            id="name"
            size="lg"
            type="text"
            placeholder="Enter your name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            className={
              formik.touched.name && formik.errors.name
                ? "!border-red-600 !focus:!border-red-600"
                : "!border-t-blue-gray-200 focus:!border-t-gray-900"
            }
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          {formik.touched.name && formik.errors.name && (
            <Typography
              variant="small"
              color="red"
              className="absolute ml-3 text-xs -bottom-4"
            >
              {formik.errors.name}
            </Typography>
          )}
        </div>

        <div className="relative flex flex-col gap-6 mb-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
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

        <div className="relative flex flex-col gap-6 mb-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            crossOrigin={undefined}
            id="password"
            size="lg"
            type="password"
            autoComplete="new-password"
            placeholder="6+ characters"
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
        <Button
          type="submit"
          fullWidth
          color="blue"
          variant="gradient"
          className="mt-6"
          disabled={status === "loading" ? true : false}
        >
          sign up
        </Button>
        <Button
          size="sm"
          fullWidth
          variant="outlined"
          color="blue"
          className="flex items-center justify-center gap-2 mt-6"
          disabled={status === "loading" ? true : false}
          onClick={() => dispatch(signUpWithGoogle())}
        >
          <FcGoogle size={25} />
          Sign up with Google
        </Button>
        <Typography
          color="gray"
          className="flex items-center justify-center gap-2 mt-4 font-normal text-center"
        >
          Already have an account?{" "}
          <Link to="/auth/sign-in">
            <Typography
              as="span"
              variant="small"
              color="blue"
              className="ml-px font-bold"
            >
              Sign in
            </Typography>
          </Link>
        </Typography>
      </form>
      <Loading open={status === "loading" ? true : false} />
    </Fragment>
  );
}

SignUp.displayName = "/src/features/auth/pages/SignUpForm.tsx";

export default SignUp;
