import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { UserRepo } from "../interfaces";
import { User } from "../entities";
import { AppError } from "../errors";

export const verifyEmailExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { email } = req.body;
  if (!email) {
    return next();
  }
  const repo: UserRepo = AppDataSource.getRepository(User);
  const user: User | null = await repo.findOneBy({ email: email });

  if (user) throw new AppError("Email already exists", 409);

  return next();
};
