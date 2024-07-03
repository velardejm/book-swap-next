import SentRequestDetails from "@/components/dashboard/sent-request-details";
import SentRequestsTable from "@/components/dashboard/sent-requests-table";
import { cookies } from "next/headers";

export default async function SentRequests() {
  const session = cookies().get("session")?.value;
  // const response = await fetch("http://localhost:8000/api/dashboard/sent-requests", {
  //   next: { tags: ["myrequests"] },
  //   cache: "no-store",
  //   credentials: "include",
  //   headers: {
  //     Authorization: `Bearer ${session}`,
  //   },
  // });

  // const { data } = await response.json();

  const data = [
    {
      sentTo: { name: "Name" },
      requestedBook: {
        title: "Title",
      },
      offerredBook: {
        title: "Title",
      },
    },
  ];

  return (
    <>
      <h2 className="text-center mt-10 mb-4 text-2xl font-bold">
        Swap Requests
      </h2>
      <div className="overflow-x-auto mx-10">
        <SentRequestsTable>
          {data.map((request, index) => {
            const { sentTo, requestedBook, offerredBook } = request;
            return (
              <SentRequestDetails
                key={index}
                {...{ sentTo, requestedBook, offerredBook }}
              />
            );
          })}
        </SentRequestsTable>
      </div>
    </>
  );
}
