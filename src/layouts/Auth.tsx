import { Routes, Route } from "react-router-dom";
import { primaryRoutes } from "@/routes";

function Auth() {
  return (
    <div className="relative w-full min-h-screen">
      <Routes>
        {primaryRoutes.map(
          ({ layout, pages }) =>
            layout === "auth" &&
            pages.map(({ path, element }) => (
              <Route path={path} element={element} />
            ))
        )}
      </Routes>
    </div>
  );
}

Auth.displayName = "/src/layouts/Auth.tsx";

export default Auth;
