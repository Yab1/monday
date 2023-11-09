import { Navbar } from "@material-tailwind/react";
import {
  PageIndicator,
  SearchBar,
  NotificationMenu,
  ProfileMenu,
} from "../atoms";

function NavBar() {
  return (
    <Navbar color="transparent" className="px-0 py-1 rounded-xl" fullWidth>
      <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
        <PageIndicator />
        <div className="flex items-center gap-1">
          <SearchBar />
          <NotificationMenu />
          <ProfileMenu />
        </div>
      </div>
    </Navbar>
  );
}

NavBar.displayName = "/src/widgets/layout/Navbar.tsx";

export default NavBar;
