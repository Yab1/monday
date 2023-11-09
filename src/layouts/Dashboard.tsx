import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { Navbar, SideNav } from "@/widgets";
import { updateSideNavState } from "@/redux/slices";
import { primaryRoutes, secondaryRoutes } from "@/routes";
import { Notifications } from "@/features/dashboard/pages";

function Dashboard() {
  const { authenticated } = useAppSelector((state) => state.auth);
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

  if (!authenticated) {
    return (
      <Routes>
        <Route path="*" element={<Navigate to="/auth/sign-in" replace />} />
      </Routes>
    );
  }

  return (
    <div className="min-h-screen bg-blue-gray-50/50">
      <SideNav />

      <div className="p-4 pb-0 xl:ml-80">
        <Navbar />
        <Routes>
          {Object.entries(primaryRoutes).map(([_, value]) => {
            const { element, path } = value;
            return <Route key={path} path={path} element={element} />;
          })}

          {Object.entries(secondaryRoutes).map(([_, value]) => {
            const { element, path } = value;
            return <Route key={path} path={path} element={element} />;
          })}
          <Route
            key={"/notifications"}
            path={"/notifications"}
            element={<Notifications />}
          />
        </Routes>
      </div>
    </div>
  );
}

Dashboard.displayName = "/src/layouts/Dashboard.tsx";

export default Dashboard;
