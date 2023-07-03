import { z } from "zod";
import { userReturnSchema, userSchema } from "./user.schemas";
import { realEstateSchema } from "./realEstate.schemas";

const scheduleSchema = z.object({
  id: z.number().positive(),
  date: z.string(),
  hour: z.string(),
  userId: z.number().int(),
  realEstateId: z.number().int(),
});

const scheduleCreateSchema = scheduleSchema.omit({
  id: true,
  userId: true,
});

const scheduleReturnSchema = scheduleSchema
  .omit({ userId: true, realEstateId: true })
  .extend({
    user: userReturnSchema,
  });

export { scheduleCreateSchema, scheduleReturnSchema, scheduleSchema };
