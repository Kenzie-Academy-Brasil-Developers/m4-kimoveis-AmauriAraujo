import { z } from "zod";
import { CategoryReturnSchema, categoryReadSchema, categorySchema } from "../schemas";
import { Category } from "../entities";
import { Repository } from "typeorm";

type categoryCreate = z.infer<typeof categorySchema>;
type CategoryRepo = Repository<Category>;
type CategoryRead = z.infer<typeof categoryReadSchema>;
type CategoryReturn=z.infer<typeof CategoryReturnSchema>

export{categoryCreate,CategoryRepo,CategoryRead,CategoryReturn}
