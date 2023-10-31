import { ReactNode, useEffect, useState } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { auth } from "@/firebase";
import { createUser } from "@/redux/thunks/crudThunks";

function RouteGuard({ children }: { children: ReactNode }) {
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);
  const { authenticated } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user: User | null) => {
      setFirebaseInitialized(true);
      if (user) {
        dispatch(createUser(user));
      }
    });
  }, [auth]);

  return authenticated ? children : <h2>Route Guard</h2>;
}

RouteGuard.displayName = "/src/features/auth/RouteGuard.tsx";

export default RouteGuard;
