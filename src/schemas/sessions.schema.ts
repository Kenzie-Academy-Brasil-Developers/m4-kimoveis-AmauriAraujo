import { z } from "zod";

const sessionCreateSchema = z.object({
  email: z.string().max(45).email(),
  password: z.string().max(120),
});

export { sessionCreateSchema };