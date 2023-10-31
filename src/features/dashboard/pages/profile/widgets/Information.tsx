import { ReactNode } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Tooltip,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { HiPencil } from "react-icons/hi";
import { useAppSelector } from "@/hooks";
import { SocialsEnum, SocialIconComponents, SocialIconColors } from "@/enum";

export function Information() {
  const { user } = useAppSelector((state) => state.auth);

  interface IDetails {
    "first name": string;
    mobile: string;
    email: string;
    social: ReactNode;
  }

  const details: IDetails = {
    "first name": user.name,
    mobile: user.phoneNumber || "Not Provided",
    email: user.email,
    social: (
      <div className="flex items-center gap-4">
        {Object.entries(user.socials).map(([key, value]) => {
          const socialKey = key as SocialsEnum;

          const IconComponent = SocialIconComponents[socialKey];

          if (value === "") return;

          return (
            <a key={key} href={value} target="_blank" rel="noopener noreferrer">
              <IconButton
                size="sm"
                className={`rounded bg-[${SocialIconColors[socialKey]}] hover:shadow-[${SocialIconColors[socialKey]}]/20 focus:shadow-[${SocialIconColors[socialKey]}]/20 active:shadow-[${SocialIconColors[socialKey]}]/10`}
              >
                <IconComponent size={20} />
              </IconButton>
            </a>
          );
        })}
      </div>
    ),
  };

  return (
    <Card color="transparent" shadow={false}>
      <CardHeader
        color="transparent"
        shadow={false}
        floated={false}
        className="flex items-center justify-between gap-4 mx-0 mt-0 mb-4"
      >
        <Typography variant="h6" color="blue-gray">
          Profile Information
        </Typography>
        <Tooltip
          content="Edit Profile"
          className="text-xs shadow-lg text-blue-gray-900 bg-blue-gray-50"
        >
          <Button variant="text" className="p-1 rounded-full">
            <HiPencil size={25} />
          </Button>
        </Tooltip>
      </CardHeader>
      <CardBody className="p-0">
        <Typography variant="small" className="font-normal text-blue-gray-500">
          {user.aboutMe}
        </Typography>
        <hr className="my-8 border-blue-gray-50" />

        <ul className="flex flex-col gap-4 p-0">
          {Object.entries(details).map(([key, value], index) => (
            <li key={index} className="flex items-center gap-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-semibold capitalize"
              >
                {key}:
              </Typography>
              {typeof value === "string" ? (
                <Typography
                  variant="small"
                  className="font-normal text-blue-gray-500"
                >
                  {value}
                </Typography>
              ) : (
                { ...value }
              )}
            </li>
          ))}
        </ul>
      </CardBody>
    </Card>
  );
}

Information.displayName = "/src/features/profile/widgets/Information.tsx";

export default Information;
