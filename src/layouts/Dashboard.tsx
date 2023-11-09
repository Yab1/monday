import { Fragment, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { Navbar, SideNav } from "@/features/dashboard/layouts";
import { updateSideNavState } from "@/redux/slices";
import { primaryRoutes, secondaryRoutes } from "@/routes";
import { Notifications } from "@/features/dashboard/pages";
import { Alert } from "@material-tailwind/react";
import { Loading } from "@/widgets";

function Dashboard() {
  const { authenticated } = useAppSelector((state) => state.auth);
  const { error } = useAppSelector((state) => state.progress);
  const { showAlert } = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleResize = () => {
      dispatch(updateSideNavState(window.innerWidth));
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]);

  if (!authenticated) {
    return (
      <Routes>
        <Route path="*" element={<Navigate to="/auth/sign-in" replace />} />
      </Routes>
    );
  }

  return (
    <Fragment>
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
          <Alert
            open={showAlert}
            color="red"
            className="absolute z-10 py-3 text-sm font-light bottom-4 right-4 w-fit"
          >
            {String(error)}
          </Alert>
          <Loading />
        </div>
      </div>
    </Fragment>
  );
}

Dashboard.displayName = "/src/layouts/Dashboard.tsx";

export default Dashboard;
