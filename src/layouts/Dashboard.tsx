// import { useEffect } from "react";
// import { Navigate, Route, Routes } from "react-router-dom";
// import { DashboardNavbar, SideNav } from "@/widgets";
// import {
//   updateSideNavState,
//   listenForAccessControlChanges,
// } from "@/redux/slices";
// import { primaryRoutes } from "../routes";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { logOut } from "@/redux/thunks/authThunks";

function Dashboard() {
  // const { authenticated, user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(updateSideNavState(window.innerWidth));

  //   window.addEventListener("resize", () =>
  //     dispatch(updateSideNavState(window.innerWidth))
  //   );

  //   if (Boolean(user.id)) dispatch(listenForAccessControlChanges(user.id));

  //   return () => {
  //     window.removeEventListener("resize", () =>
  //       dispatch(updateSideNavState(window.innerWidth))
  //     );
  //   };
  // }, []);

  // if (!authenticated)
  //   return (
  //     <Routes>
  //       <Route path="*" element={<Navigate to={"/auth/sign-in"} replace />} />
  //     </Routes>
  //   );

  return (
    <div className="min-h-screen bg-blue-gray-50/50">
      <h2>Home</h2>
      <button onClick={() => dispatch(logOut())}>Log out</button>
      {/* <SideNav />
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
      </div> */}
    </div>
  );
}

Dashboard.displayName = "/src/layouts/Dashboard.tsx";

export default Dashboard;
