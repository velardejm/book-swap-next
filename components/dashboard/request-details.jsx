export default function RequestDetails() {
  return (
    <>
      <tr className="hover:bg-gray-100">
        <td>Requested Book Title</td>
        <td>Offerred Book Title</td>
        <td>Request</td>
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
