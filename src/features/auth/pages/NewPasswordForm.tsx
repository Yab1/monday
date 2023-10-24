import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Input, Button, Typography } from "@material-tailwind/react";
import { useFormik } from "formik";
import { newPasswordSchema } from "../schema";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { Loading } from "@/widgets";

export function NewPassword() {
  const { status } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      password: "",
      confirm: "",
    },
    validationSchema: newPasswordSchema,
    onSubmit: (values) => {
      if (values.password !== values.confirm) {
        formik.setFieldError("confirm", "Passwords must match");
      } else {
        console.log(values);
      }
    },
  });

  return (
    <Fragment>
      <Typography
        variant="h4"
        className="text-3xl font-medium font-poppins text-extremely-dark-gray"
      >
        Create new password
      </Typography>
      <Typography className="text-sm font-poppins text-dark-gray">
        Your new password must be different from previous used passwords.
      </Typography>
      <form
        className="max-w-screen-lg mt-8 mb-2 w-80 sm:w-96"
        onSubmit={formik.handleSubmit}
      >
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

        <div className="relative flex flex-col gap-6 mb-5">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Confirm Password
          </Typography>
          <Input
            crossOrigin={undefined}
            id="confirm"
            size="lg"
            type="password"
            placeholder="Confirm your password"
            value={formik.values.confirm}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.confirm && Boolean(formik.errors.confirm)}
            className={
              formik.touched.confirm && formik.errors.confirm
                ? "!border-red-600 !focus:!border-red-600"
                : "!border-t-blue-gray-200 focus:!border-t-gray-900"
            }
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          {formik.touched.confirm && formik.errors.confirm && (
            <Typography
              variant="small"
              color="red"
              className="absolute ml-3 text-xs -bottom-4"
            >
              {formik.errors.confirm}
            </Typography>
          )}
        </div>

        <Button
          fullWidth
          color="blue"
          type="submit"
          variant="gradient"
          className="mt-6"
          disabled={status === "loading" ? true : false}
        >
          Reset Password
        </Button>
      </form>
      <Loading open={status === "loading" ? true : false} />
    </Fragment>
  );
}

NewPassword.displayName = "/src/features/auth/pages/NewPasswordForm.tsx";

export default NewPassword;
