"use client";

export default function DeleteBookModal() {
  return (
    <>
      <p className="" id="to-delete-id"></p>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="delete_book_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Are you sure you want to delete <span id="to-delete-title"></span>
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                className="btn"
                onClick={() => {
                  const title = document.getElementById("to-delete-title");
                  alert(title.innerText);
                }}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
