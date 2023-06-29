import { Router } from "express";
import realEstateControllers from "../controllers/realEstate.controllers";

export const realEstateRouter: Router = Router();

realEstateRouter.post(
  "",
 realEstateControllers.create
);
