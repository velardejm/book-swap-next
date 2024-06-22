"use client";

import { useEffect, useState } from "react";

import SignupP1 from "../signup/signup-p1";
import SignupP2 from "../signup/signup-p2";

export default function SignupModal() {
  const [formData, setFormData] = useState({ email: null, username: null });
  const [page, setPage] = useState(1);

  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box flex flex-col">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg mb-8">Sign Up</h3>

          {/* Sign Up Form */}

          {page === 1 ? (
            <SignupP1 {...{ setPage, formData, setFormData }} />
          ) : (
            <SignupP2 setPage={setPage} formData={formData} />
          )}

          {/* <div className={`${page === 1 ? "" : "hidden"} flex flex-col`}>
            <SignupP1 setPage={setPage} />
          </div>

          <div className={`${page === 2 ? "" : "hidden"} flex flex-col`}>
            <SignupP2 setPage={setPage} />
          </div> */}
        </div>
      </dialog>
    </>
  );
}
