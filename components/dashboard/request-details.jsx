export default function RequestDetails({
  requester,
  requestedBook,
  offerredBook,
}) {
  return (
    <>
      <tr className="hover:bg-gray-100">
        <td>{requestedBook?.title || "(Not Found)"}</td>
        <td>{offerredBook?.title || "(Not Found)"}</td>
        <td>{requester?.name}</td>
        <td>
          <div className="flex">
            <button className="btn mr-5">Accept</button>
            <button className="btn">Reject</button>
          </div>
        </td>
      </tr>
    </>
  );
}