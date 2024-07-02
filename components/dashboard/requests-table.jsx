"use client";

import { useState } from "react";
import RequestDetails from "./request-details";

export default function RequestsTable({ requests }) {
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
            <th>Requestor</th>
            <th>Approve / Reject </th>
          </tr>
        </thead>
        <tbody>
          {/* {requests.map((request, index) => {
            return (
              <>
                <RequestDetails
                  requestedBook={requestedBook}
                  offerredBook={offerredBook}
                  requestor={requestor}
                />
              </>
            );
          })} */}
          <RequestDetails />
        </tbody>
        {/* foot */}
        <tfoot></tfoot>
      </table>
    </>
  );
}
