import { Fragment } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useFormik } from "formik";
import { signInSchema } from "./schema";

const backgroundImage =
  "https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80";

export function SignIn() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: true,
    },
    validationSchema: signInSchema,
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
              Sign In
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <form className="flex flex-col gap-2">
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
              <div className="relative flex flex-col">
                <Link to="/auth/sign-up" className="self-end mr-2">
                  <Typography as="span" variant="small" color="blue">
                    Forget Password?
                  </Typography>
                </Link>
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
              <div className="-ml-2.5">
                <Checkbox
                  id="rememberMe"
                  crossOrigin={undefined}
                  label="Remember Me"
                  defaultChecked
                  onChange={formik.handleChange}
                />
              </div>
            </form>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              variant="gradient"
              fullWidth
              onClick={() => formik.handleSubmit()}
            >
              Sign In
            </Button>
            <Typography variant="small" className="flex justify-center mt-6">
              Don't have an account?
              <Link to="/auth/sign-up">
                <Typography
                  as="span"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  Sign up
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </Fragment>
  );
}

SignIn.displayName = "/src/features/auth/SignIn.tsx";

export default SignIn;
