import { Routes, Route, Navigate } from "react-router-dom";
import { Alert } from "@material-tailwind/react";
import { authRoutes } from "@/routes";
import { useAppDispatch, useAppSelector } from "@/hooks";
import background from "@/assets/img/auth-background.svg";
import { authIdle, toggler } from "@/redux/slices";
import { useEffect } from "react";
import { Loading } from "@/widgets";
import { ToggleableEnum } from "@/enum";

function Auth() {
  const { authenticated, authError } = useAppSelector((state) => state.auth);
  const {
    toggleable: { alert },
  } = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (authError) {
      dispatch(toggler(ToggleableEnum.ALERT));

      setTimeout(() => {
        dispatch(toggler(ToggleableEnum.ALERT));
        dispatch(authIdle());
      }, 4000);
    }
  }, [authError]);

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
          open={alert}
          color="red"
          className="absolute z-10 flex items-center py-1 text-sm font-light top-3 w-fit place-self-center"
        >
          {String(authError)}
        </Alert>

        <Routes>
          {Object.entries(authRoutes).map(([_, value]) => {
            const { element, path } = value;
            return <Route key={path} path={path} element={element} />;
          })}
        </Routes>
      </aside>
      <Loading />
    </main>
  );
}

Auth.displayName = "/src/layouts/Auth.tsx";

export default Auth;
