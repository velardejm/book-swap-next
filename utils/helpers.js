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
