import { Router } from "express";
import middlewares from "../middlewares";
import { sessionCreateSchema } from "../schemas";
import { sessionsControllers } from "../controllers";

export const sessionRouter: Router = Router();

sessionRouter.post(
  "",
  middlewares.validateBody(sessionCreateSchema),
  sessionsControllers.create
);

