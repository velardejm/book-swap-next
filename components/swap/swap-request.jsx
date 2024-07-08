import Dropdown from "./dropdown";

export default function SwapRequest({ setIsSwapRequestOpen, selectedBook, userBooks }) {
  const { title, author, genre, condition } = selectedBook;
  const booksToSwap = ["Book 1", "Book 2"];
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
        <div className="  bg-gray-100 p-10 rounded-lg">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            // onClick={() => setIsAddBookOpen(false)}
          >
            ✕
          </button>

          <h3 className="text-lg text-center font-bold mb-5">Swap Details</h3>
          <div className="flex flex-cold justify-center">
            <div className="min-w-72">
              <h3 className="font-bold mb-2">Requested Book</h3>
              <p className="font-bold">Title: {title}</p>
              <p>Author: {author}</p>
              <p>Genre: {genre}</p>
              <p>Condition: {condition}</p>
            </div>
            <div className="min-w-72">
              <p className="mb-2">Book to swap:</p>
              <Dropdown books={userBooks}/>
            </div>
          </div>
          <div className="flex justify-end">
            <button className="btn btn-primary mr-4">Swap</button>
            <button
              className="btn btn-warning"
              onClick={() => setIsSwapRequestOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
