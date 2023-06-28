import { Request, Response } from "express";
import { UserRead, UserReturn, UserUpdate } from "../interfaces";
import { userServices } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
  const user: UserReturn = await userServices.create(req.body);
  return res.status(201).json(user);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const users: UserRead = await userServices.read();
  return res.status(200).json(users);
};

export const update = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user: UserReturn = await userServices.update(
    res.locals.foundEntity,
    req.body
  );

  return res.status(200).json(user);
};

const destroy = async (req: Request, res: Response): Promise<Response> => {
  await userServices.destroy(res.locals.foundEntity);
  return res.status(204).json();
};

export default { create, read, update, destroy };
