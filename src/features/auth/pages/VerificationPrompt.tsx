import { Link } from "react-router-dom";
import { Button, Typography } from "@material-tailwind/react";

function VerificationPrompt() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-3">
      <Typography
        variant="h4"
        className="text-3xl font-medium font-poppins text-extremely-dark-gray"
      >
        Check your mail
      </Typography>
      <Typography className="text-sm font-poppins text-dark-gray">
        We've sent email verification instructions to your inbox.
      </Typography>
      <Button
        color="blue"
        variant="gradient"
        className="px-10 mt-7 w-fit"
        // onClick={}
      >
        Open email app
      </Button>
      <Button
        variant="text"
        className="font-semibold text-gray-600 normal-case w-fit"
        // onClick={}
      >
        Resend Email
      </Button>
      <Typography
        color="gray"
        className="flex flex-col items-center justify-center mt-20 font-normal text-center"
      >
        Did not receive the email? Check your spam filter,{" "}
      </Typography>
      <div className="flex items-center justify-center gap-1 font-normal">
        <Typography color="gray" className="font-normal">
          or
        </Typography>
        <Link to="/auth/sign-up">
          <Typography
            as="span"
            variant="small"
            color="blue"
            className="font-bold"
          >
            try another email address
          </Typography>
        </Link>
      </div>
    </div>
  );
}

VerificationPrompt.displayName = "/Email Verification Prompt";

export default VerificationPrompt;
