import { Router } from "express";
import { categoryControllers, userControllers } from "../controllers";
import middlewares from "../middlewares";
import { categorySchema } from "../schemas";

const categoryRouter: Router = Router();

categoryRouter.post(
  "",
  middlewares.verifyToken,middlewares.verifyAdmin,middlewares.verifyNameExists,categoryControllers.create
);

export { categoryRouter };
