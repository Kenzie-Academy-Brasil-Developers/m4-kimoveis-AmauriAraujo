import { Request, Response } from "express";
import { categoryServices } from "../services";
import { categoryCreate } from "../interfaces";

const create = async (req: Request, res: Response): Promise<Response> => {
    const category: categoryCreate = await categoryServices.create(req.body);
    return res.status(201).json(category);
  };

  export default{create}