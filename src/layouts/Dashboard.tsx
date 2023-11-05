import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { DashboardNavbar, SideNav } from "@/widgets";
import { updateSideNavState } from "@/redux/slices";
import { primaryRoutes } from "@/routes";
import { readProject } from "@/redux/thunks/crudThunks";

function Dashboard() {
  const { authenticated, user } = useAppSelector((state) => state.auth);
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

  useEffect(() => {
    const fetchProject = async () => {
      const abortController = new AbortController();
      // const { signal } = abortController;

      await dispatch(readProject(user.id));

      return () => {
        abortController.abort();
      };
    };

    return () => {
      fetchProject();
    };
  }, [dispatch, user.id]);

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
