import { z } from "zod";
import { realEstateCreateSchema} from "../schemas";
import {  Repository } from "typeorm";
import { RealEstate } from "../entities";

type realEstateCreate = z.infer<typeof realEstateCreateSchema>;


type realEstateRepo = Repository<RealEstate>;

export { realEstateCreate,realEstateRepo };
