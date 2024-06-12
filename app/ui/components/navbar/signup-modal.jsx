"use client";

import SignUp from "./signup";

export default function SignupModal() {
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        Sign Up
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box flex flex-col">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Sign Up</h3>
          <SignUp />
        </div>
      </dialog>
    </>
  );
}
