import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { User, getAuth, onAuthStateChanged } from "firebase/auth";
// import { useAppDispatch, useAppSelector } from "@/hooks";
import { useAppSelector } from "@/hooks";
// import { authenticate } from "@/slices";

function AuthRoute({ children }: { children: ReactNode }) {
  const { authenticated } = useAppSelector((state) => state.auth);
  // const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // const auth = getAuth();

  // useEffect(() => {
  //   AuthCheck();
  // }, [auth]);

  // const AuthCheck = onAuthStateChanged(auth, (user: User | null) => {
  //   if (user !== null) {
  //     if (user.emailVerified) {
  //       dispatch(authenticate());
  //     }
  //   }
  // });

  useEffect(() => {
    if (!authenticated) navigate(-1);
  }, [authenticated]);

  return authenticated ? children : null;
}

AuthRoute.displayName = "/src/features/auth/AuthRoute.tsx";

export default AuthRoute;
