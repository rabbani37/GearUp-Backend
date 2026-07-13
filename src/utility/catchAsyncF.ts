import { NextFunction, Request, RequestHandler, Response } from "express"

const catchAsyncF = (fu: RequestHandler) => {
    return async (req: Request, res: Response, next: NextFunction) => {

        try {
            fu(req, res, next)

        } catch (error) {
            next(error)
        }

    }
};

export default catchAsyncF;