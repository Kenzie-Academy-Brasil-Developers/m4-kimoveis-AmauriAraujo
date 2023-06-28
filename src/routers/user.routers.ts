import { Router } from "express";
import { userControllers } from "../controllers";
import middlewares from "../middlewares";
import { userCreateSchema, userUpdateSchema } from "../schemas";

const userRouter: Router = Router();

userRouter.post(
  "",
  middlewares.validateBody(userCreateSchema),
  middlewares.verifyEmailExists,
  userControllers.create
);

userRouter.get(
  "",
  middlewares.verifyToken,
  middlewares.verifyAdmin,
  userControllers.read
);
userRouter.use("/:id", middlewares.idExists);

userRouter.patch(
  "/:id",
  middlewares.validateBody(userUpdateSchema),
  middlewares.verifyToken,
  userControllers.update
);

userRouter.delete(
  "/:id",
  middlewares.verifyToken,
  middlewares.verifyAdmin,
  userControllers.destroy
);

export { userRouter };
