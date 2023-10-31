import {
  HomeIcon,
  TableCellsIcon,
  UserCircleIcon,
  BellIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import {
  Home,
  Projects,
  Profile,
  Notifications,
} from "@/features/dashboard/pages";
import { SignIn, SignUp } from "@/features/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};

interface Page {
  icon?: JSX.Element;
  name: string;
  path: string;
  element: JSX.Element;
}

interface Route {
  layout: string;
  pages: Page[];
}

export const primaryRoutes: Route[] = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "project",
        path: "/project",
        element: <Projects />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    layout: "auth",
    pages: [
      {
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export const secondaryRoutes: Route[] = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <InboxIcon {...icon} />,
        name: "inbox",
        path: "/inbox",
        element: <InboxIcon />,
      },
      {
        icon: <BellIcon {...icon} />,
        name: "notifactions",
        path: "/notifactions",
        element: <Notifications />,
      },
      {
        icon: <Cog6ToothIcon {...icon} />,
        name: "setting",
        path: "/setting",
        element: <Cog6ToothIcon />,
      },
      {
        icon: <PowerIcon {...icon} />,
        name: "logout",
        path: "/logout",
        element: <PowerIcon />,
      },
    ],
  },
];

export default { primaryRoutes, secondaryRoutes };
