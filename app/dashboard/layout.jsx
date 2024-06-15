import DashboardNavbar from "@/components/navbar/dashboard-navbar";

export default function Dashboard({ children }) {
  return (
    <>
      <DashboardNavbar />
      {children}
    </>
  );
}
