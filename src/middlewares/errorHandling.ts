import { ErrorRequestHandler } from "express";

const errorHandlingMiddleware: ErrorRequestHandler = (err, req, res, next) => {
  err.statusCode = err.status || 404;
  console.log(err.message);
  return err.customMessage || err.message
    ? res.status(err.statusCode).json({
        message: err.customMessage || err.message,
      })
    : res.status(err.statusCode).json({ message: err });
};
export default errorHandlingMiddleware;
