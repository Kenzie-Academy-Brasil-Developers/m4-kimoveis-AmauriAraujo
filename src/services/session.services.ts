import { compare } from "bcryptjs";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { UserRepo } from "../interfaces";
import {
  SessionCreate,
  SessionReturn,
} from "../interfaces/sessions.interfaces";
import { AppError } from "../errors";
import { sign } from "jsonwebtoken";
import { sessionCreateSchema } from "../schemas";

const create = async (payload: SessionCreate): Promise<SessionReturn> => {
  const validate = sessionCreateSchema.parse(payload);

  const { email } = validate;

  const repo: UserRepo = AppDataSource.getRepository(User);
  const user: User | null = await repo.findOneBy({ email: email });

  if (!user) {
    throw new AppError("Invalid credentials", 401);
  }

  if (user.deletedAt != null) {
    throw new AppError("Invalid credentials", 401);
  }

  const samePassword: boolean = await compare(payload.password, user.password);

  if (!samePassword) {
    throw new AppError("Invalid credentials", 401);
  }

  const token: string = sign(
    { email: user.email, name: user.name, admin: user.admin },
    process.env.SECRET_KEY!,
    { subject: user.id.toString(), expiresIn: process.env.EXPIRES_IN! }
  );

  return { token };
};

export default { create };
