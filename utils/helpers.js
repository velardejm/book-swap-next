import { cookies } from "next/headers";

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


export const authorizedFetch = async (url, cacheType) => {
    const session = cookies().get("session")?.value;
    const options = cacheType ? {
        cache: "no-store"
    } : null
    const response = await fetch(url, options)
    const responseData = await response.json();
}