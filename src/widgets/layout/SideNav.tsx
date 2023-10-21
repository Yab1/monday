import { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, Typography } from "@material-tailwind/react";
import { primaryRoutes, secondaryRoutes } from "@/routes";
import { useAppSelector } from "@/hooks";
function Sidenav() {
  const {
    toggleable: { darkMode, sideNav },
  } = useAppSelector((state) => state.ui);

  return (
    <Fragment>
      {sideNav ? (
        <aside className="fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0 border bg-white shadow-lg dark:bg-gradient-to-br from-blue-gray-800 to-blue-gray-900 ">
          <div className="relative border-b border-blue-gray-50 dark:border-white/20">
            <Link to="/" className="flex items-center gap-4 px-8 py-6">
              <Typography
                variant="h6"
                className="text-blue-gray-900 dark:text-white"
              >
                WorkFlow
              </Typography>
            </Link>
          </div>
          <div className="m-4">
            {primaryRoutes.map(({ layout, pages }, key) => (
              <ul key={key} className="flex flex-col gap-1 mb-4">
                {pages.map(({ icon, name, path }) => (
                  <li key={name}>
                    <NavLink to={`/${layout}${path}`}>
                      {({ isActive }) => (
                        <Button
                          variant={isActive ? "gradient" : "text"}
                          color={
                            isActive ? "blue" : darkMode ? "white" : "blue-gray"
                          }
                          className={
                            "flex items-center gap-4 px-4 capitalize " +
                            (isActive
                              ? "text-white"
                              : darkMode
                              ? "text-white"
                              : "text-blue-gray-700")
                          }
                          fullWidth
                        >
                          {icon}
                          <Typography className="font-medium capitalize">
                            {name}
                          </Typography>
                        </Button>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            ))}
            <hr className="my-2 border-blue-gray-50" />
            {secondaryRoutes.map(({ layout, pages }, key) => (
              <ul key={key} className="flex flex-col gap-1 mb-4">
                {pages.map(({ icon, name, path }) => (
                  <li key={name}>
                    <NavLink to={`/${layout}${path}`}>
                      {({ isActive }) => (
                        <Button
                          variant={isActive ? "gradient" : "text"}
                          color={
                            isActive ? "blue" : darkMode ? "white" : "blue-gray"
                          }
                          className={
                            "flex items-center gap-4 px-4 capitalize " +
                            (isActive
                              ? "text-white"
                              : darkMode
                              ? "text-white"
                              : "text-blue-gray-700")
                          }
                          fullWidth
                        >
                          {icon}
                          <Typography className="font-medium capitalize text-inherit">
                            {name}
                          </Typography>
                        </Button>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </aside>
      ) : null}
    </Fragment>
  );
}

Sidenav.displayName = "/src/widgets/layout/SideNav.tsx";

export default Sidenav;
