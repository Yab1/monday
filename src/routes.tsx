import {
  Home,
  Projects,
  Profile,
  Inbox,
  Setting,
  Help,
} from "@/features/dashboard/pages";
import { SignIn, SignUp } from "@/features/auth";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { ImTable2 } from "react-icons/im";
import { FaUserCircle } from "react-icons/fa";
import { RiInbox2Fill } from "react-icons/ri";
import { AiFillSetting } from "react-icons/ai";
import { BiSolidHelpCircle } from "react-icons/bi";

const size: number = 20;

interface Page {
  icon: JSX.Element;
  name: string;
  path: string;
  element: JSX.Element;
}

export const primaryRoutes: Page[] = [
  {
    icon: <MdOutlineSpaceDashboard size={size} />,
    name: "dashboard",
    path: "/home",
    element: <Home />,
  },
  {
    icon: <ImTable2 size={size} />,
    name: "project",
    path: "/project",
    element: <Projects />,
  },
];

export const authRoutes: Page[] = [
  {
    icon: <></>,
    name: "sign in",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    icon: <></>,
    name: "sign up",
    path: "/sign-up",
    element: <SignUp />,
  },
];

export const secondaryRoutes: Page[] = [
  {
    icon: <FaUserCircle size={size} />,
    name: "my profile",
    path: "/profile",
    element: <Profile />,
  },
  {
    icon: <RiInbox2Fill size={size} />,
    name: "inbox",
    path: "/inbox",
    element: <Inbox />,
  },
  {
    icon: <AiFillSetting size={size} />,
    name: "setting",
    path: "/setting",
    element: <Setting />,
  },
  {
    icon: <BiSolidHelpCircle size={size} />,
    name: "help",
    path: "/help",
    element: <Help />,
  },
];

export default { primaryRoutes, authRoutes, secondaryRoutes };
