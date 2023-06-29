import { Router } from "express";
import { categoryControllers, userControllers } from "../controllers";
import middlewares from "../middlewares";

const categoryRouter: Router = Router();

categoryRouter.post(
  "",
  middlewares.verifyToken,middlewares.verifyAdmin,middlewares.verifyNameExists,categoryControllers.create
);

categoryRouter.get("",categoryControllers.read)

categoryRouter.get("/:id/realEstate",categoryControllers.retrieve)

export { categoryRouter };
