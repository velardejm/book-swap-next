import Request from "./request";

export default function Requests() {
  return (
    <>
      <h2 className="text-center mt-10 mb-4 text-2xl font-bold">
        Swap Requests
      </h2>
      <div className="overflow-x-auto mx-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Requested Book</th>
              <th>Offerred Book</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            <Request />
            <Request />
            <Request />
            <Request />
            <Request />
          </tbody>
          {/* foot */}
          <tfoot></tfoot>
        </table>
      </div>
    </>
  );
}
