// "use client";

// import { useState } from "react";

export default function SentRequestsTable({ children }) {
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
            <th>Sent To</th>
            <th>Status</th>
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
