export const formatNumberSeparator = (number) => {
  if(!number) return ''

  const numberToString = number?.toString();
  if (numberToString?.length > 3) {
    const regex = /\B(?=(\d{3})+(?!\d))/g;
    const newNumber = numberToString?.replace(regex, ".");
    return newNumber;
  }

  return number;
};

export const translateItemCondition = (condition) =>{
  if(!condition) return '';

  switch (condition) {
    case "new":
      return  "Nuevo";
    case "used":
      return "Usado"; 
    case "reconditioned":
      return "Reacondicionado";
    default : return condition
  }
  
}
