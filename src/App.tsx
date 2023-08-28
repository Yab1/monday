import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Dashboard from "./layouts/dashboard";

function App() {
  return (
    <Routes>
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
    </Routes>
  );
}

export default App;
