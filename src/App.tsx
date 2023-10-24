import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAppSelector } from "@/hooks";
import { Auth, Dashboard } from "@/layouts";
import { manageAttributes } from "@/function";
import { AuthRoute } from "@/features/auth";

function App() {
  const {
    toggleable: { darkMode },
  } = useAppSelector((state) => state.ui);
  const { authenticated } = useAppSelector((state) => state.auth);

  useEffect(() => {
    manageAttributes(darkMode);
  }, [darkMode]);

  return (
    <Routes>
      <Route path="/auth/*" element={<Auth />} />
      <Route
        path="/dashboard/*"
        element={
          <AuthRoute>
            <Dashboard />
          </AuthRoute>
        }
      />
      {authenticated ? (
        <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
      ) : (
        <Route path="*" element={<Navigate to="/auth/sign-in" replace />} />
      )}
    </Routes>
  );
}

export default App;
