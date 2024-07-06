// "use client";

// import { useState } from "react";
// import RequestDetails from "./request-details";

export default function RequestsTable({ children }) {
  // const [isEditOpen, setIsEditOpen] = useState(false);
  // const [isAddBookOpen, setIsAddBookOpen] = useState(false);
  // const [selectedBook, setSelectedBook] = useState(null);

  return (
    <>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Requested Book</th>
            <th>Offerred Book</th>
            <th>Request by</th>
            <th>Approve / Reject </th>
          </tr>
        </thead>
        <tbody>
          {children}
        </tbody>
        <tfoot></tfoot>
      </table>
    </>
  );
}