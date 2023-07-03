import { Request, Response } from "express";
import { scheduleServices } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
    const userId: number = Number(res.locals.decoded.sub);
    const schedule= await scheduleServices.create(req.body, userId);
  
    return res.status(201).json(schedule);
  };
  
  export default { create };