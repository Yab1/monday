import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "@/hooks";

function AuthRoute({ children }: { children: ReactNode }) {
  const { authenticated } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authenticated) navigate(-1);
  }, [authenticated]);

  return authenticated ? children : null;
}

AuthRoute.displayName = "/src/features/auth/AuthRoute.tsx";

export default AuthRoute;
