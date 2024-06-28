import DashboardNavbar from "@/components/dashboard/dashboard-navbar";

export default function Dashboard({ children }) {
  return (
    <>
      <DashboardNavbar />
      {children}
    </>
  );
}
