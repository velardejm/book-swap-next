import BookDetails from "../books/book-details";

export default function BookDetailsSwap({
  book,
  setIsSwapRequestOpen,
  setSelectedBook,
}) {
  const handleClick = () => {
    setSelectedBook(book);
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
