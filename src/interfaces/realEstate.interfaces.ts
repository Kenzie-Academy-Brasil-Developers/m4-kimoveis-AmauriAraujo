import { z } from "zod";
import {
  realEstateCreateSchema,
  realEstateReadSchema,
  realEstateReturnSchema,
} from "../schemas";
import { Repository } from "typeorm";
import { RealEstate } from "../entities";

type realEstateCreate = z.infer<typeof realEstateCreateSchema>;

type realEstateReturn = z.infer<typeof realEstateReturnSchema>;
type realEstateRepo = Repository<RealEstate>;
type realEstateRead = z.infer<typeof realEstateReadSchema>;

export { realEstateCreate, realEstateRepo, realEstateReturn, realEstateRead };
