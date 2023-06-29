import { number, string, z } from "zod";
import { categorySchema } from "./category.schemas";
import { addressSchema } from "./address.schema";

const realEstateSchema = z.object({
  id: z.number().positive(),
 sold: z.boolean().default(false),
value:z.string()||z.number().positive().default(0),
 size: z.number().positive(),
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
  addressId:addressSchema,
  categoryId:categorySchema
});

const realEstateCreateSchema = realEstateSchema.omit({
  id: true,
  sold:true,
  createdAt: true,
  updatedAt: true,
});



export {
realEstateCreateSchema,realEstateSchema
};
