// import { books } from "@/public/dummydata";
import ListingsTable from "@/components/swap/listings-table";
import { authorizedFetch } from "@/utils/helpers-server";

export default async function Listings() {
  // const response = await fetch("http://localhost:8000/api/dashboard/listings", {
  //   cache: "no-store",
  // });

  // const responseData = await response.json();
  // console.log(responseData);

  const response = await authorizedFetch(
    "http://localhost:8000/api/dashboard/listings",
    "no-store"
  );
  const listings = response.status === 200 ? response.data.listingsData : [];
  const userBooks = response.status === 200 ? response.data.userBooksData : [];


  return (
    <>
      <h2 className="text-center mt-10 mb-4 text-2xl font-bold">Book List</h2>
      <div className="overflow-x-auto mx-10">
        <ListingsTable listings={listings} userBooks={userBooks}/>
      </div>
    </>
  );
}
