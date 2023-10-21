import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/hooks";
import Dashboard from "@/layouts/dashboard";
import { manageAttributes } from "@/function";
import { initializeCurrentUser } from "@/features/profile/slice";

function App() {
  const users = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const {
    toggleable: { darkMode },
  } = useAppSelector((state) => state.ui);

  useEffect(() => {
    manageAttributes(darkMode);
  }, [darkMode]);

  useEffect(() => {
    dispatch(initializeCurrentUser(users[0]));
  }, [users]);

  return (
    <Routes>
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
    </Routes>
  );
}

export default App;
