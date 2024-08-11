export const validateRegex = (regex: RegExp, value: string): boolean => {
  return regex.test(value);
};
