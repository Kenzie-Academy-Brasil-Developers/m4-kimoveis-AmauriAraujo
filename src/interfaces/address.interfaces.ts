import {z} from"zod"
import { Repository } from "typeorm";
import { Address } from "../entities";
import { addressCreateSchema } from "../schemas";

type addressRepo = Repository<Address>;
type addressCreate=z.infer<typeof addressCreateSchema>
export { addressRepo,addressCreate };
