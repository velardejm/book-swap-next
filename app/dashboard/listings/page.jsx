import { books } from "@/public/dummydata";
import ListingsTable from "@/components/swap/listings-table";

export default async function Listings() {
  const response = await fetch("http://localhost:8000/api/dashboard/listings", {
    cache: "no-store",
  });

  const responseData = await response.json();
  console.log(responseData);

  return (
    <>
      <h2 className="text-center mt-10 mb-4 text-2xl font-bold">Book List</h2>
      <div className="overflow-x-auto mx-10">
        <ListingsTable books={books} />
      </div>
    </>
  );
}
