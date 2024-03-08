export const FormatError = (err, cb) => {
    let error = err;
    const errorMessage = error.response ? error.response.data.message : error.message;
    return cb(errorMessage);
};
