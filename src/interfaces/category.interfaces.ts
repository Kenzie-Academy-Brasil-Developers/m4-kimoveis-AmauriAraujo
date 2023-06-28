import { z } from "zod";
import { categorySchema } from "../schemas";
import { Category } from "../entities";
import { Repository } from "typeorm";

type categoryCreate = z.infer<typeof categorySchema>;
type CategoryRepo = Repository<Category>;

export{categoryCreate,CategoryRepo}
