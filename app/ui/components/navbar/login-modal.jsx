"use client";

import LogIn from "./login";

export default function LoginModal() {
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Log In
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box flex flex-col">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Log In</h3>
          <LogIn />
        </div>
      </dialog>
    </>
  );
}
