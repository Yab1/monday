import { Avatar, Typography } from "@material-tailwind/react";
import { useAppSelector } from "@/hooks";

function Header() {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <div className="flex items-center justify-between gap-6 mb-10">
      <div className="flex items-center gap-6 cursor-default">
        <Avatar
          src={user.photoURL}
          alt={`profile picture of user ${user.name}`}
          size="xl"
          variant="rounded"
          className="rounded-lg shadow-lg shadow-blue-gray-500/40"
        />
        <div>
          <Typography variant="h5" color="blue-gray" className="mb-1">
            {user.name}
          </Typography>
          <Typography
            variant="small"
            className="font-normal text-blue-gray-600"
          >
            {user.title}
          </Typography>
        </div>
      </div>
    </div>
  );
}

Header.displayName = "/src/features/profile/widgets/Header.tsx";

export default Header;
