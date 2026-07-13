import { NextFunction, Request, Response } from "express";
import status from "http-status";


let statusCode = status.INTERNAL_SERVER_ERROR

const globalErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {

    res.status(statusCode).json({
        success: false,
        statusCode: statusCode,
        message: err.message,
        errorDetails: err.stack  // It shouldn't always be stack here, but the project is only in development, that's why I kept the stack.
    })
};

export default globalErrorHandler;