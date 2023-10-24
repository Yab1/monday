import { Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import emailIcon from "@/assets/img/email-icon.png";

function VerificationPrompt() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-3">
      <figure className="w-52 aspect-square">
        <img src={emailIcon} alt="" />
      </figure>
      <Typography
        variant="h4"
        className="text-3xl font-medium font-poppins text-extremely-dark-gray"
      >
        Check your mail
      </Typography>
      <Typography className="text-sm font-poppins text-dark-gray">
        You will receive a verification link in your email shortly. Open your
        email client to access it.
      </Typography>
      <a
        href="https://mail.google.com/mail/u/0/#inbox"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button color="blue" variant="gradient" className="px-10 mt-7 w-fit">
          Open Gmail App
        </Button>
      </a>
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
