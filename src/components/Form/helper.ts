export const handleInputChange = <T>(
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  setState: React.Dispatch<React.SetStateAction<T>>
) => {
  const { name, value, type } = e.target;
  setState((prevState) => ({
    ...prevState,
    [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
  }));
};

export const validatePhoneNumber = (phoneNumber: string): boolean => {
  const phoneRegex = /^\+?(\d[\d-. ]+)?(\([\d-. ]+\))?[\d-. ]+\d$/;
  return phoneRegex.test(phoneNumber);
};

// You can add more helper functions as needed