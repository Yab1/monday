import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Alert, Button } from "@material-tailwind/react";
import { AiOutlineClose } from "react-icons/ai";
import { primaryRoutes } from "@/routes";
import { useAppSelector } from "@/hooks";
import background from "@/assets/img/auth-background.svg";

function Auth() {
  const [open, setOpen] = useState<boolean>(false);
  const { error } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (error) {
      setOpen(!open);
    }

    setTimeout(() => {
      setOpen(false);
    }, 4000);
  }, [error]);

  return (
    <main className="relative grid w-full h-screen grid-cols-12 overflow-hidden">
      <aside
        className="absolute inset-0 bg-no-repeat bg-cover -bottom-2 -left-1"
        style={{ backgroundImage: `url(${background})` }}
      ></aside>
      <aside className="relative grid col-start-6 col-span-full bg-light-gray place-content-center">
        <Alert
          open={open}
          color="red"
          className="absolute z-10 flex items-center py-1 top-3 w-fit place-self-center"
          action={
            <Button
              variant="text"
              onClick={() => setOpen(!open)}
              className="m-0"
            >
              <AiOutlineClose />
            </Button>
          }
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
