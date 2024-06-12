export default function BookCard() {
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl m-2">
        <div className="card-body">
          <h2 className="card-title">Book Title</h2>
          <p>Author's Name</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Swap</button>
          </div>
        </div>
      </div>
    </>
  );
}
