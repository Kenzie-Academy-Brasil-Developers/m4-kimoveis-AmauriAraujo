import { Router } from "express";
import { userControllers } from "../controllers";
import middlewares from "../middlewares";
import { userCreateSchema } from "../schemas";

export const userRouter: Router = Router();

userRouter.post("",middlewares.validateBody(userCreateSchema),middlewares.verifyEmailExists,userControllers.create)

userRouter.get("",middlewares.verifyToken,middlewares.verifyAdmin,userControllers.read)
