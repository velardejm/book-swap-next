export default function Request() {
  return (
    <>
      <tr>
        <td>
          Requested Book Title
          <br />
          <button className="btn btn-outline btn-xs text-blue-400 ">
            book details
          </button>
        </td>
        <td>
          Offerred Book Title <br />
          <button className="btn btn-outline btn-xs text-blue-400 ">
            book details
          </button>
        </td>
        <td>
          <div className="flex">
            <button className="btn btn-outline btn-xs text-green-500 mr-4">
              Accept
            </button>
            <button className="btn btn-outline btn-xs text-red-500">
              Reject
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}
