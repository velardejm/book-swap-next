import BookCard from "./book-card";

export default function MyBooks() {
  return (
    <>
      <h1>My Books</h1>
      <div className="flex flex-wrap justify-center mx-4">
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
    </>
  );
}
