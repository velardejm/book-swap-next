"use client";

export default function BookCard({ book, openEdit, closeEdit, setSelectedBook }) {
  const { title, author, genre, owner_id, condition } = book;

  return (
    <>
      <tr className="hover:bg-gray-100">
        <td className="font-bold">{title}</td>
        <td>{author}</td>
        <td>{genre}</td>
        <td>{owner_id}</td>
        <td>{condition}</td>
        <td className="flex">
          <img
            src="edit-icon.svg"
            alt="edit"
            className="mr-4 hover:cursor-pointer"
            onClick={() => {
              setSelectedBook(book);
              openEdit();
            }}
          />
          <img
            src="delete-icon.svg"
            alt="delete"
            className="hover:cursor-pointer"
            onClick={() => {
              const deleteModal = document.getElementById("delete_book_modal");
              const toDeleteId = document.getElementById("to-delete-title");
              deleteModal.showModal();
              toDeleteId.innerText = title;
            }}
          />
        </td>
      </tr>
    </>
  );
}
