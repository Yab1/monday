import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Fragment } from "react";
import { FcGoogle } from "react-icons/fc";
import { useFormik } from "formik";
import { signUpSchema } from "./schema";

const backgroundImage =
  "https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80";

export function SignUp() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <Fragment>
      <img
        src={backgroundImage}
        className="absolute inset-0 z-0 object-cover w-full h-full"
      />
      <div className="absolute inset-0 z-0 w-full h-full bg-black/50" />
      <div className="container p-4 mx-auto">
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
          <CardHeader
            variant="gradient"
            color="blue"
            className="grid mb-4 h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Sign Up
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-3">
            <Button
              size="sm"
              variant="outlined"
              color="blue-gray"
              className="flex items-center gap-3 mx-auto w-fit"
            >
              <FcGoogle />
              Continue with Google
            </Button>
            <Typography variant="small" className="mx-auto">
              or
            </Typography>
            <form className="flex flex-col gap-5">
              <div className="relative">
                <Input
                  crossOrigin={undefined}
                  id="name"
                  label="Name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.name && Boolean(formik.errors.name)}
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
              <div className="relative">
                <Input
                  crossOrigin={undefined}
                  id="email"
                  label="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
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
              <div className="relative">
                <Input
                  crossOrigin={undefined}
                  id="password"
                  label="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
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
            </form>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              variant="gradient"
              fullWidth
              type="submit"
              onClick={() => formik.handleSubmit()}
            >
              Sign Up
            </Button>
            <Typography variant="small" className="flex justify-center mt-6">
              Already have an account?
              <Link to="/auth/sign-in">
                <Typography
                  as="span"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  Sign in
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </Fragment>
  );
}

SignUp.displayName = "/src/features/auth/SignUp.tsx";

export default SignUp;
