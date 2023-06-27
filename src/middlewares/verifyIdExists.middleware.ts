import { NextFunction, Request, Response } from "express";
import { User } from "../entities";
import { UserRepo } from "../interfaces";
import { AppDataSource } from "../data-source";

export const idExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const id: number = Number(req.params.id);

  const userRepository:UserRepo= AppDataSource.getRepository(User)

  const foundEntity: User | null = await userRepository.findOneBy({ id });
  if (!foundEntity) throw new Error("User not found");

  res.locals = { ...res.locals, foundEntity };

  return next();
};