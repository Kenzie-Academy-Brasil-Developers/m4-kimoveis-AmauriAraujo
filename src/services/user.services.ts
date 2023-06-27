import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { UserCreate, UserRepo, UserReturn } from "../interfaces";
import { userReturnSchema } from "../schemas";

const create = async (payload: UserCreate): Promise<UserReturn> => {
    const userRepository:UserRepo= AppDataSource.getRepository(User);
    const user: User = userRepository.create(payload);
    await userRepository.save(user);
  
    return userReturnSchema.parse(user);
  };

  export default {create}