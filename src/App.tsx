import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged, User } from "firebase/auth";
import { Auth, Dashboard } from "@/layouts";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { resetState, showAlert } from "@/redux/slices";
import { auth } from "@/firebase";
import { createUser } from "@/redux/thunks/crudThunks";
import { Loading } from "@/widgets";

function App() {
  const { error, status, authenticated } = useAppSelector(
    (state) => state.auth
  );
  const [firebase, setFirebase] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user: User | null) => {
      setFirebase(true);
      if (user !== null) dispatch(createUser({ user }));
    });
  }, [auth]);

  useEffect(() => {
    if (error) {
      dispatch(showAlert(true));

      setTimeout(() => {
        dispatch(showAlert(false));
        dispatch(resetState());
      }, 4000);
    }
  }, [error]);

  if (!firebase || status === "loading") return <Loading />;

  return (
    <Routes>
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route
        path="*"
        element={
          <Navigate
            to={authenticated ? "/dashboard/home" : "/auth/sign-in"}
            replace
          />
        }
      />
    </Routes>
  );
}

export default App;
