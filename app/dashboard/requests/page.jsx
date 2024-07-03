import RequestDetails from "@/components/dashboard/request-details";
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

  const { data } = await response.json();
  // console.log(data);

  return (
    <>
      <h2 className="text-center mt-10 mb-4 text-2xl font-bold">
        Swap Requests
      </h2>
      <div className="overflow-x-auto mx-10">
        {/* <RequestsTable /> */}
        <RequestsTable>
          {data.map((request, index) => {
            const { requester, requestedBook, offerredBook } = request;
            return (
              <RequestDetails key={index} {...{ requester, requestedBook, offerredBook }} />
            );
          })}
        </RequestsTable>
      </div>
    </>
  );
}
