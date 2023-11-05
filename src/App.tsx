import { Routes, Route, Navigate } from "react-router-dom";
import { useAppSelector } from "@/hooks";
import { Auth, Dashboard } from "@/layouts";
import { RouteGuard } from "@/features/auth";

function App() {
  const { authenticated } = useAppSelector((state) => state.auth);

  return (
    <RouteGuard>
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
    </RouteGuard>
  );
}

export default App;
