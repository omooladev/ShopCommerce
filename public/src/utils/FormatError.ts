export const FormatError = (err: object, cb: Function) => {
  let error = err as any;
  const errorMessage = error.response ? error.response.data.message : error.message;
  return cb(errorMessage);
};
