import { Fragment } from "react";
import { Input, Button, Typography } from "@material-tailwind/react";
import { useFormik } from "formik";
import { resetSchema } from "../schema";
// import { signInWithEmailPassword } from "@/slices";
import { useAppSelector } from "@/hooks";
import { Loading } from "@/widgets";

export function ResetPrompt() {
  const { status } = useAppSelector((state) => state.auth);
  // const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: resetSchema,
    onSubmit: () => {
      // const userData = { email: values.email };
      // dispatch(signInWithEmailPassword(userData));
    },
  });

  return (
    <Fragment>
      <Typography
        variant="h4"
        className="text-3xl font-medium font-poppins text-extremely-dark-gray"
      >
        Reset Password
      </Typography>
      <Typography className="text-sm w-[400px] font-poppins text-dark-gray">
        Enter the email associated with your account and we'll send an email
        with instructions to reset your password.
      </Typography>
      <form className="max-w-screen-lg mt-8 mb-2 w-80 sm:w-96">
        <div className="relative flex flex-col gap-6 mb-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Email address
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

        <Button
          type="submit"
          fullWidth
          color="blue"
          variant="gradient"
          className="mt-6"
          onClick={() => formik.handleSubmit()}
          disabled={status === "loading" ? true : false}
        >
          send instructions
        </Button>
      </form>
      <Loading open={status === "loading" ? true : false} />
    </Fragment>
  );
}

ResetPrompt.displayName = "/src/features/auth/pages/ResetPrompt.tsx";

export default ResetPrompt;
