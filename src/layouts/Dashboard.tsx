import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { DashboardNavbar, SideNav } from "@/widgets";
import { primaryRoutes } from "../routes";
import { useAppDispatch } from "@/hooks";
import { updateSideNavState } from "@/slices";

function Dashboard() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(updateSideNavState(window.innerWidth));

    window.addEventListener("resize", () =>
      dispatch(updateSideNavState(window.innerWidth))
    );

    return () => {
      window.removeEventListener("resize", () =>
        dispatch(updateSideNavState(window.innerWidth))
      );
    };
  }, []);

  return (
    <div className="min-h-screen bg-blue-gray-50/50">
      <SideNav />
      <div className="p-4 pb-0 xl:ml-80">
        <DashboardNavbar />
        <Routes>
          {primaryRoutes.map(
            ({ layout, pages }) =>
              layout === "dashboard" &&
              pages.map(({ path, element }) => (
                <Route path={path} element={element} />
              ))
          )}
        </Routes>
      </div>
    </div>
  );
}

Dashboard.displayName = "/src/layouts/Dashboard.tsx";

export default Dashboard;
