import { Routes, Route } from "react-router-dom";
import { primaryRoutes } from "@/routes";
import background from "@/assets/img/auth-background.svg";

function Auth() {
  return (
    <main className="relative grid w-full h-screen grid-cols-12 overflow-hidden">
      <aside
        className="absolute inset-0 bg-no-repeat bg-cover -bottom-2 -left-1"
        style={{ backgroundImage: `url(${background})` }}
      ></aside>
      <aside className="relative grid col-start-6 col-span-full bg-light-gray place-content-center">
        <Routes>
          {primaryRoutes.map(
            ({ layout, pages }) =>
              layout === "auth" &&
              pages.map(({ path, element }) => (
                <Route path={path} element={element} />
              ))
          )}
        </Routes>
      </aside>
    </main>
  );
}

Auth.displayName = "/src/layouts/Auth.tsx";

export default Auth;
