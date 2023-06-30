import { AppDataSource } from "../data-source";
import { RealEstate, Schedule, User } from "../entities";
import { AppError } from "../errors";
import {
  ScheduleCreate,
  ScheduleReturn,
  UserRepo,
  realEstateRepo,
  scheduleRepository,
} from "../interfaces";
import { scheduleReturnSchema } from "../schemas";

const create = async (
  payload: ScheduleCreate,
  userId: number
) => {
  const realEstateRepo: realEstateRepo =
    AppDataSource.getRepository(RealEstate);
  const real_estate: RealEstate | null = await realEstateRepo.findOneBy({
    id: Number(payload.realEstateId),
  });
 
  const hour  = payload.hour;
  const recortHour = hour.split(":")[0];
  // throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);

  if (Number(recortHour) > 18 || Number(recortHour) < 8)
    throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);

  if (!real_estate) throw new AppError("RealEstate not found", 404);

  const userRepo: UserRepo = AppDataSource.getRepository(User);
  const user: User | null = await userRepo.findOneBy({ id: userId });

  if (!user) throw new AppError("User not found", 404);

  const scheduleRepo: scheduleRepository =
    AppDataSource.getRepository(Schedule);

 

  const schedule: Schedule = scheduleRepo.create({
    ...payload,
    user,
    real_estate,
  });
  await scheduleRepo.save(schedule);
const messages={message:"Schedule created"}
  return messages;
};

export default { create };
