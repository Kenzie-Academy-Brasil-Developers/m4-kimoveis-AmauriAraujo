import { z } from "zod";
import {  categorySchema } from "./category.schemas";
import { addressCreateSchema, addressSchema } from "./address.schema";
import { scheduleReturnSchema } from "./schedule.schema";

const realEstateSchema = z.object({
  id: z.number().positive(),
  sold: z.boolean().default(false),
  value: z.string().or(z.number().positive().default(0)),
  size: z.number().positive(),
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
  addressId: z.number(),
  categoryId:z.number()
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
  .omit({size:true,
  sold:true,value:true,
  updatedAt:true, 
  addressId:true,
  categoryId:true
})
  .extend({
    address: addressSchema,
    category:categorySchema,
    schedules:scheduleReturnSchema.array(),
    
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
