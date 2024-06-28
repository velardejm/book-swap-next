export default function AddBook() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 opacity-75">
      {/* <div className="fixed inset-0 bg-gray-800 opacity-75"></div> */}
      <div className="modal-box">
        <h3 className="text-lg font-bold">Hello!</h3>
        <p className="py-4">This is a modal</p>
        <div className="modal-action">
          <a href="#" className="btn">
            Yay!
          </a>
        </div>
      </div>
    </div>
  );
}
