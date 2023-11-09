import {
  Avatar,
  Typography,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { BellIcon, ClockIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

function NotificationMenu() {
  const navigate = useNavigate();
  return (
    <Menu placement="bottom-start">
      <MenuHandler>
        <IconButton variant="text" color="blue-gray">
          <BellIcon className="w-5 h-5 text-blue-gray-500" />
        </IconButton>
      </MenuHandler>
      <MenuList className="border-0 w-max">
        <MenuItem className="flex items-center gap-3">
          <Avatar
            src="https://demos.creative-tim.com/material-dashboard/assets/img/team-2.jpg"
            alt="item-1"
            size="sm"
            variant="circular"
          />
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-1 font-normal"
            >
              <strong>New message</strong> from Laur
            </Typography>
            <Typography
              variant="small"
              color="blue-gray"
              className="flex items-center gap-1 text-xs font-normal opacity-60"
            >
              <ClockIcon className="h-3.5 w-3.5" /> 13 minutes ago
            </Typography>
          </div>
        </MenuItem>
        <hr className="my-2 border-blue-gray-50" />
        <MenuItem
          className="flex items-center justify-center gap-2"
          onClick={() => navigate("notifications")}
        >
          <Typography variant="small" className="font-medium">
            View All
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

NotificationMenu.displayName = "/src/widgets/atoms/NotificationMenu.tsx";

export default NotificationMenu;
