import RequestsTable from "@/components/dashboard/requests-table";
import { cookies } from "next/headers";

export default async function Requests() {
  const session = cookies().get("session")?.value;
  const response = await fetch("http://localhost:8000/api/dashboard/requests", {
    next: { tags: ["myrequests"] },
    cache: "no-store",
    credentials: "include",
    headers: {
      Authorization: `Bearer ${session}`,
    },
  });

  return (
    <>
      <h2 className="text-center mt-10 mb-4 text-2xl font-bold">
        Swap Requests
      </h2>
      <div className="overflow-x-auto mx-10">
        <RequestsTable />
      </div>
    </>
  );
}
