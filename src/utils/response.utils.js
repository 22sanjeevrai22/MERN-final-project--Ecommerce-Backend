const successResponse = (res, message, data, statusCode = 200) => {
    return res.status(statusCode).json({
        message,
        data
    });
}

const errorResponse = (res, message, err, statusCode = 400) => {
    return res.status(statusCode).json({
        message,
        err
    });
};

module.exports = {
    successResponse,
    errorResponse,
};