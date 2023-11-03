import { Routes, Route, Navigate } from "react-router-dom";
import { Alert } from "@material-tailwind/react";
import { primaryRoutes } from "@/routes";
import { useAppSelector } from "@/hooks";
import background from "@/assets/img/auth-background.svg";

function Auth() {
  const { error, authenticated } = useAppSelector((state) => state.auth);
  const { showAlert } = useAppSelector((state) => state.ui);

  if (authenticated) {
    return (
      <Routes>
        <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
      </Routes>
    );
  }

  return (
    <main className="grid w-full h-screen overflow-hidden md:relative md:grid-cols-12">
      <aside
        className="absolute inset-0 hidden bg-no-repeat bg-cover -z-10 -bottom-2 -left-1 md:block"
        style={{ backgroundImage: `url(${background})` }}
      ></aside>

      <aside className="flex flex-col items-center justify-center gap-3 px-5 bg-light-gray md:col-start-6 md:col-span-full md:px-10 lg:px-20 xl:px-40">
        <Alert
          open={showAlert}
          color="red"
          className="absolute z-10 flex items-center py-1 text-sm font-light top-3 w-fit place-self-center"
        >
          {String(error)}
        </Alert>

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
