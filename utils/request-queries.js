import { pool } from "@/app/api/db";
import { handlelQuery } from "./query-helpers.js";

export async function queryGetRequests(userId) {
    console.log('test');

    const queryFunction = async (userId) => {
        const queryStringGetRequests = "SELECT * FROM swaprequests WHERE requestee_id = $1";
        const queryStringGetBookDetails = "SELECT * FROM books WHERE id = $1";
        const queryStringGetUserName = "SELECT name FROM usersinfo WHERE id = $1";
        const { rows } = await pool.query(queryStringGetRequests, [userId]);
        // console.log(rows);
        const requestDetails = await Promise.all(
            rows.map(async (request) => {
                const { requester_id, requested_book_id, offerred_book_id } = request;
                const [requester, requestedBook, offerredBook] = await Promise.all([
                    pool.query(queryStringGetUserName, [requester_id]),
                    pool.query(queryStringGetBookDetails, [requested_book_id]),
                    pool.query(queryStringGetBookDetails, [offerred_book_id]),
                ])
                return { requester: requester.rows[0], requestedBook: requestedBook.rows[0], offerredBook: offerredBook.rows[0] };
            })
        )
        // console.log(requestDetails);
        return requestDetails;
    };
    return await handlelQuery(queryFunction, userId);
}


export async function queryGetRequests2(userId) {
    const queryFunction = async (userId) => {
        const queryStringGetRequests = "SELECT * FROM swaprequests WHERE requestee_id = $1";
        // const queryStringGetBookDetails = "SELECT * FROM books WHERE id = $1";
        // const queryStringGetUserName = "SELECT name FROM usersinfo WHERE id = $1";
        const { rows } = await pool.query(queryStringGetRequests, [userId]);
        // console.log(rows);
        // const requestDetails = await Promise.all(
        //     rows.map(async (request) => {
        //         const { requester_id, requested_book_id, offerred_book_id } = request;
        //         const [requester, requestedBook, offerredBook] = await Promise.all([
        //             pool.query(queryStringGetUserName, [requester_id]),
        //             pool.query(queryStringGetBookDetails, [requested_book_id]),
        //             pool.query(queryStringGetBookDetails, [offerred_book_id]),
        //         ])
        //         return { requester: requester.rows[0], requestedBook: requestedBook.rows[0], offerredBook: offerredBook.rows[0] };
        //     })
        // )

        const requests = rows.map(request => {
            const { requested_book_id, requested_book_title, offerred_book_id, offerred_book_title, requester_name } = request;
            return {
                requestedBook: request.requested_book,
            }
        })

        // console.log(requestDetails);
        return requests;
    };
    return await handlelQuery(queryFunction, userId);
}



export async function addRequest(request) {

}