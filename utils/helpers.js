export const updateForm = (e, setter) => {
    const { name, value } = e.target;
    setter((prev) => {
        return {
            ...prev,
            [name]: value,
        };
    });
};