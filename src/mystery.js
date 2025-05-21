export const mystery2 = (num) => {
  if ((num % 400 === 0) || (num % 4 === 0 && num % 100 !== 0)) {
    return true;
  }
  return false;
};