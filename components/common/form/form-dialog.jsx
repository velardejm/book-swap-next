export default function FormDialog({ children }) {
  <>
    {/* You can open the modal using document.getElementById('ID').showModal() method */}
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box flex flex-col">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">Log In</h3>
        {children}
      </div>
    </dialog>
  </>;
}
