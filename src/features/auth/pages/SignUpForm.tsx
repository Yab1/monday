import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Button, Typography } from "@material-tailwind/react";
import { FcGoogle } from "react-icons/fc";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { SagaActions } from "@/enum";
export function SignUp() {
  const { status } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

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

      <Button
        fullWidth
        className="flex items-center justify-center gap-3"
        disabled={status === "loading" ? true : false}
        onClick={() => dispatch({ type: SagaActions.AUTH_WITH_GOOGLE })}
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
    </Fragment>
  );
}

SignUp.displayName = "/src/features/auth/pages/SignUpForm.tsx";

export default SignUp;
