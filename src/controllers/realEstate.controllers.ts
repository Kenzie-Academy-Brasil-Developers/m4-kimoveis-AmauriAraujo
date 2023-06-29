import { Request, Response } from "express";
import { RealEstate } from "../entities";
import { realEstateServices } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
    const realEstate: RealEstate= await realEstateServices.create(req.body);
    return res.status(201).json(realEstate);
  };

  export default{create}