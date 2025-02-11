export const NULL_CHECK = (str: string) => {
  if (str !== null && str !== "null" && str.length > 0) return true;
  else return false;
};
