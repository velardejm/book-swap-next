import BookDetails from "../books/book-details";

export default function BookDetailsSwap({
  book,
  setIsSwapRequestOpen,
  setRequestedBook,
}) {
  const handleClick = () => {
    setRequestedBook(book);
    setIsSwapRequestOpen(true);
  };
  return (
    <>
      <BookDetails book={book}>
        <td className="flex">
          <button className="btn" onClick={handleClick}>
            Swap
          </button>
        </td>
      </BookDetails>
    </>
  );
}
