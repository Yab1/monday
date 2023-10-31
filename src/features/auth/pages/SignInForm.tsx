import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Button, Typography } from "@material-tailwind/react";
import { FcGoogle } from "react-icons/fc";
import { useAppSelector, useAppDispatch } from "@/hooks";
import { authWithGoogle } from "@/redux/thunks/authThunks";

export function SignIn() {
  const { status } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

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

      <Button
        fullWidth
        className="flex items-center justify-center gap-3"
        disabled={status === "loading" ? true : false}
        onClick={() => dispatch(authWithGoogle())}
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
    </Fragment>
  );
}

SignIn.displayName = "/src/features/auth/pages/SignInForm.tsx";

export default SignIn;
