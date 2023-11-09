import { NavLink } from "react-router-dom";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import { HiLogout } from "react-icons/hi";
import { secondaryRoutes } from "@/routes";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { SagaActions } from "@/enum";

function ProfileMenu() {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  return (
    <Menu>
      <MenuHandler>
        <Avatar
          src={user.photoURL}
          alt={`profile picture of user ${user.name}`}
          size="sm"
          variant="rounded"
          className="border-2 border-green-500 rounded-full shadow-sm shadow-blue-gray-500/40"
        />
      </MenuHandler>
      <MenuList>
        {Object.entries(secondaryRoutes).map(([_, value]) => {
          const { path, name, icon } = value;
          return (
            <MenuItem key={path}>
              <NavLink to={`/dashboard/${path}`}>
                {({ isActive }) => (
                  <div
                    className={
                      "flex items-center gap-2 " + (isActive ? "" : "")
                    }
                  >
                    {icon}
                    <Typography
                      variant="small"
                      className="font-medium capitalize"
                    >
                      {name}
                    </Typography>
                  </div>
                )}
              </NavLink>
            </MenuItem>
          );
        })}
        <hr className="my-2 border-blue-gray-50" />
        <MenuItem
          className="flex items-center gap-2"
          onClick={() => dispatch({ type: SagaActions.LOG_OUT })}
        >
          <HiLogout size={20} />
          <Typography variant="small" className="font-medium">
            Sign Out
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

ProfileMenu.displayName =
  "/src/features/dashboard/layouts/navbar/widgets/ProfileMenu.tsx";

export default ProfileMenu;
