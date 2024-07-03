export default function SentRequestDetails({
  sentTo,
  requestedBook,
  offerredBook,
}) {
  return (
    <>
      <tr className="hover:bg-gray-100">
        <td>{requestedBook?.title || "(Not Found)"}</td>
        <td>{offerredBook?.title || "(Not Found)"}</td>
        <td>{sentTo?.name}</td>
        <td>
          <div className="flex">
            <p>Status</p>
          </div>
        </td>
      </tr>
    </>
  );
}
