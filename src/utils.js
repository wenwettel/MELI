export const formatNumberSeparator = (number) => {
  const numberToString = number?.toString();

  if (numberToString?.length > 3) {
    const regex = /\B(?=(\d{3})+(?!\d))/g;
    const newNumber = numberToString?.replace(regex, ".");

    return newNumber;
  }

  return number;
};
