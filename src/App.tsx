import { Fragment, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import { useAppSelector, useAppDispatch } from "@/hooks";
import { Auth, Dashboard } from "@/layouts";
import { manageAttributes } from "@/function";
import { authenticate, initializeUser } from "@/slices";

function App() {
  const {
    toggleable: { darkMode },
  } = useAppSelector((state) => state.ui);
  const { authenticated } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();

  useEffect(() => {
    manageAttributes(darkMode);
  }, [darkMode]);

  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user: User | null) => {
      if (user !== null) {
        if (user.emailVerified) {
          dispatch(initializeUser(user));
          dispatch(authenticate());
        }
      }
    });
  }, [auth]);

  return (
    <Routes>
      {authenticated ? (
        <Fragment>
          <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Fragment>
      ) : (
        <Fragment>
          <Route path="*" element={<Navigate to="/auth/sign-in" replace />} />
          <Route path="/auth/*" element={<Auth />} />
        </Fragment>
      )}
    </Routes>
  );
}

export default App;
