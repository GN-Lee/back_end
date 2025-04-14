const successResponse = (
  res,
  statusCode = 200,
  message = "성공",
  data = {}
) => {
  res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

const failResponse = (
  res,
  statusCode = 400,
  message = "실패",
  code = "fail",
  details = "응 니 잘못~"
) => {
  res.status(statusCode).json({
    success: false,
    message,
    error: {
      code,
      details,
    },
  });
};

module.exports = { successResponse, failResponse };
