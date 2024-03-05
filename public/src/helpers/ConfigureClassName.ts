export const ConfigureClassName = (length: number) => {
  let className =
    length === 1 ? "one" : length === 2 ? "two" : length === 3 ? "three" : length === 4 ? "four" : "";
  return className;
};
