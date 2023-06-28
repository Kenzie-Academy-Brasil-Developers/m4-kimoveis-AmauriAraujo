import { AppDataSource } from "../data-source";
import { User } from "../entities";
import {
  UserCreate,
  UserRead,
  UserRepo,
  UserReturn,
  UserUpdate,
} from "../interfaces";
import { userReadSchema, userReturnSchema, userUpdateSchema } from "../schemas";

const create = async (payload: UserCreate): Promise<UserReturn> => {
  const userRepository: UserRepo = AppDataSource.getRepository(User);
  const user: User = userRepository.create(payload);
  await userRepository.save(user);

  return userReturnSchema.parse(user);
};

const read = async (): Promise<UserRead> => {
  const userRepository: UserRepo = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  return userReadSchema.parse(users);
};

const update = async (user: User, payload: UserUpdate): Promise<UserReturn> => {
  //   const {admin}=user

  // if(payload.admin){
  //  throw new AppError("Admin not possible upadate",404)
  // }

  // if(!admin){

  //   const repo: UserRepo = AppDataSource.getRepository(User);

  //   const userUpd:User=await repo.save({...user,...payload});

  //   return userReturnSchema.parse(userUpd);

  // }

  const repo: UserRepo = AppDataSource.getRepository(User);

  const userUpd: User = await repo.save({ ...user, ...payload });

  return userReturnSchema.parse(userUpd);
};

const destroy = async (user: User): Promise<void> => {
  const repo: UserRepo = AppDataSource.getRepository(User);

  await repo.softRemove(user);
};

export default { create, read, update, destroy };
