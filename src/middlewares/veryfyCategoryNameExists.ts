import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { CategoryRepo } from "../interfaces";
import { Category } from "../entities";
import { AppError } from "../errors";

export const verifyNameExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { name } = req.body;
  if (!name) {
    return next();
  }
  const repo: CategoryRepo = AppDataSource.getRepository(Category);
  const category: Category | null = await repo.findOneBy({ name: name });

  if (category) throw new AppError("Category already exists", 409);

  return next();
};
