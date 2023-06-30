import { Request, Response } from "express";
import { ScheduleReturn } from "../interfaces";
import { scheduleServices } from "../services";
import { Schedule } from "../entities";

const create = async (req: Request, res: Response): Promise<Response> => {
    const userId: number = Number(res.locals.decoded.sub);
    const schedule= await scheduleServices.create(req.body, userId);
  
    return res.status(201).json(schedule);
  };
  
  export default { create };