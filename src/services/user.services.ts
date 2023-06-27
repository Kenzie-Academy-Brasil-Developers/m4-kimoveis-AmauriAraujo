import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { UserCreate, UserRead, UserRepo, UserReturn } from "../interfaces";
import { userReadSchema, userReturnSchema } from "../schemas";

const create = async (payload: UserCreate): Promise<UserReturn> => {
    const userRepository:UserRepo= AppDataSource.getRepository(User);
    const user: User = userRepository.create(payload);
    await userRepository.save(user);
  
    return userReturnSchema.parse(user);
  };

  const read = async (): Promise<UserRead> => {
    const userRepository:UserRepo= AppDataSource.getRepository(User);
    return userReadSchema.parse(await userRepository.find());
  };

  export default {create,read}