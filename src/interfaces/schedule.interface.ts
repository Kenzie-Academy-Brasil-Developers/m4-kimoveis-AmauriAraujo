import { z } from "zod";
import { scheduleCreateSchema, scheduleReturnSchema } from "../schemas";
import { Repository } from "typeorm";
import { Schedule } from "../entities";

type ScheduleCreate = z.infer<typeof scheduleCreateSchema>;
type ScheduleReturn = z.infer<typeof scheduleReturnSchema>;

type scheduleRepository=Repository<Schedule>;

export {ScheduleCreate, ScheduleReturn, scheduleRepository };