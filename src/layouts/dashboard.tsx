import DashboardNavbar from "../widgets/dashboard-navbar";
import Sidenav from "../widgets/layout/sidenav";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-blue-gray-50/50">
      <Sidenav />
      <div className="p-4 xl:ml-80 min-h-screen">
        <DashboardNavbar />
      </div>
    </div>
  );
}
