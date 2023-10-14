import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "./hooks";
import Dashboard from "./layouts/dashboard";
import { manageAttributes } from "@/function";

function App() {
  const {
    toggleable: { darkMode },
  } = useAppSelector((state) => state.ui);

  useEffect(() => {
    manageAttributes(darkMode);
  }, [darkMode]);

  return (
    <Routes>
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
    </Routes>
  );
}

export default App;
