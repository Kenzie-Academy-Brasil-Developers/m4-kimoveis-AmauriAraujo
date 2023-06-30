import { Router } from "express";
import middlewares from "../middlewares";
import scheduleControllers from "../controllers/schedule.controllers";
import { scheduleCreateSchema} from "../schemas";

export const scheduleRouter: Router = Router();

scheduleRouter.post("",middlewares.verifyToken,middlewares.validateBody(scheduleCreateSchema),scheduleControllers.create);

scheduleRouter.get("",middlewares.verifyToken,middlewares.verifyAdmin);