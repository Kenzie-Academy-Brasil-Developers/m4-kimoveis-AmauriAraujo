import { Request, Response } from "express";
import { scheduleServices } from "../services";
import { realEstateReturn } from "../interfaces";

const create = async (req: Request, res: Response): Promise<Response> => {
  const userId: number = Number(res.locals.decoded.sub);
  const schedule = await scheduleServices.create(req.body, userId);

  return res.status(201).json(schedule);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const realEstate: realEstateReturn = await scheduleServices.read(
    req.params.id
  );
  return res.status(200).json(realEstate);
};

export default { create, read };
