import { z } from "zod";

const categorySchema = z.object({
  id: z.number().positive(),
  name: z.string().max(45),
});

const categoryCreateSchema = categorySchema.omit({ id: true });
const categoryReadSchema = categorySchema.array();

const CategoryReturnSchema = categorySchema.omit({ name: true, id: true });

export {
  categorySchema,
  categoryReadSchema,
  CategoryReturnSchema,
  categoryCreateSchema,
};
