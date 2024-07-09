// "use server";
// import { cookies } from "next/headers";

// export const authorizedFetch = async (url, cacheType, tags) => {
//     const session = cookies().get("session")?.value;
//     const options = {
//         cache: cacheType || "default",
//         headers: {
//             Authorization: `Bearer ${session}`
//         },
//         next: { tags: tags || [] }
//     }
//     const response = await fetch(url, options)
//     const responseData = await response.json();
//     return responseData;
// }