import { z } from "zod";
import { categoryReadSchema, categorySchema } from "../schemas";
import { Category } from "../entities";
import { Repository } from "typeorm";

type categoryCreate = z.infer<typeof categorySchema>;
type CategoryRepo = Repository<Category>;
type CategoryRead = z.infer<typeof categoryReadSchema>;

export{categoryCreate,CategoryRepo,CategoryRead}
