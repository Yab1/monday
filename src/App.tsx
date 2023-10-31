import { useEffect, useState } from "react";
import { Routes, Route, Navigate, redirect } from "react-router-dom";
import { User, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useAppSelector, useAppDispatch } from "@/hooks";
import { Auth, Dashboard } from "@/layouts";
import { manageAttributes } from "@/function";
// import { authenticate, initializeUser } from "@/redux/slices";
import { Loading } from "@/widgets";
import createUser from "./redux/thunks/crudThunks/createThunks/createUser";
import { auth } from "@/firebase";
import { RouteGuard } from "./features/auth";
import { toggler } from "./redux/slices";
import { ToggleableEnum } from "./enum";

function App() {
  // const [firebaseInitialized, setFirebaseInitialized] = useState(false);
  const {
    toggleable: { darkMode, firebaseInitialized },
  } = useAppSelector((state) => state.ui);
  const { authenticated, status } = useAppSelector((state) => state.auth);

  // const dispatch = useAppDispatch();

  useEffect(() => {
    manageAttributes(darkMode);
  }, [darkMode]);

  useEffect(() => {
    onAuthStateChanged(auth, (user: User | null) => {
      toggler(ToggleableEnum.FIREBASE_INITIALIZED);
      if (user !== null) {
        console.log(user);
      }
    });
  }, [auth]);

  if (!firebaseInitialized || status === "loading") return <Loading />;

  // if (authenticated) {
  //   redirect("/dashboard/home");
  // } else {
  //   redirect("/auth/sign-in");
  // }

  return (
    <Routes>
      <Route
        path="/dashboard/*"
        element={
          <RouteGuard>
            <Dashboard />
          </RouteGuard>
        }
      />
      <Route path="/auth/*" element={<Auth />} />
      {/* <Route
        path="*"
        element={
          <Navigate
            to={authenticated ? "/dashboard/home" : "/auth/sign-in"}
            replace
          />
        }
      /> */}
    </Routes>
  );
}

export default App;
