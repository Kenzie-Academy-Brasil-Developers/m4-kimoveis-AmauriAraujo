import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

export const verifyAdmin = (req: Request, res: Response, next: NextFunction): void => {

    const {admin}=req.body

    if (!admin) throw new AppError("Insufficient permission", 403);

  return next();

}

