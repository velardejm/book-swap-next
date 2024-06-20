import BookCard from "@/components/dashboard/book-card";

export default function MyBooks() {
  return (
    <>
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
