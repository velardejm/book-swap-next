export const updateForm = (e, setter) => {
    const { name, value } = e.target;
    setter((prev) => {
        return {
            ...prev,
            [name]: value,
        };
    });
};

export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};


// export const authorizedFetch = async (url, cacheType, sessionCookie, tags) => {
//     const options = {
//         cache: cacheType || "default",
//         headers: {
//             Authorization: `Bearer ${sessionCookie}`
//         },
//         next: { tags: tags || [] }
//     }

//     const response = await fetch(url, options)
//     const responseData = await response.json();
//     return responseData;
// }