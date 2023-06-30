import { z } from "zod";
import { categoryCreateSchema, categorySchema } from "./category.schemas";
import { addressCreateSchema, addressSchema } from "./address.schema";

const realEstateSchema = z.object({
  id: z.number().positive(),
  sold: z.boolean().default(false),
  value: z.string().or(z.number().positive().default(0)),
  size: z.number().positive(),
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
  addressId: addressSchema,
  categoryId: categoryCreateSchema.or(z.number()),
});

const realEstateCreateSchema = realEstateSchema
  .omit({
    id: true,
    sold: true,
    createdAt: true,
    updatedAt: true,
    addressId: true,
  })
  .extend({
    address: addressCreateSchema,
  });

const realEstateReturnSchema = realEstateSchema
  .omit({ addressId: true })
  .extend({
    address: addressCreateSchema,
  });

const realEstateReadSchema = realEstateSchema
  .extend({ realEstateReturnSchema })
  .array();

export {
  realEstateCreateSchema,
  realEstateSchema,
  realEstateReturnSchema,
  realEstateReadSchema,
};
