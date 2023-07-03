import { AppDataSource } from "../data-source";
import { RealEstate, Schedule, User } from "../entities";
import { AppError } from "../errors";
import {
  ScheduleCreate,
  UserRepo,
  realEstateRepo,
  scheduleRepository,
} from "../interfaces";

const create = async (payload: ScheduleCreate, userId: number) => {
  const realEstateRepo: realEstateRepo =
    AppDataSource.getRepository(RealEstate);

  const real_estate: RealEstate | null = await realEstateRepo.findOneBy({
    id: Number(payload.realEstateId),
  });

  if (!real_estate) throw new AppError("RealEstate not found", 404);

  const hour = payload.hour;
  const recortHour = hour.split(":")[0];

  if (Number(recortHour) > 18 || Number(recortHour) < 8)
    throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);

  const date = new Date(payload.date).getDay();
  if (date == 0 || date == 6)
    throw new AppError("Invalid date, work days are monday to friday", 400);

  const userRepo: UserRepo = AppDataSource.getRepository(User);
  const user: User | null = await userRepo.findOneBy({ id: userId });
  if (!user) throw new AppError("User not found", 404);

  const scheduleRepo: scheduleRepository =
    AppDataSource.getRepository(Schedule);

  const userSchedules = await userRepo
    .createQueryBuilder("user")
    .leftJoinAndSelect("user.schedules", "us")
    .where("us.hour = :hour AND us.date =:date AND us.user= :userId", {
      hour: payload.hour,
      date: payload.date,
      userId: userId,
    })
    .getOne();

  if (userSchedules) {
    throw new AppError(
      "User schedule to this real estate at this date and time already exists",
      409
    );
  }

  const realEstateSchedules = await scheduleRepo
    .createQueryBuilder("sc")
    .select()
    .where("sc.hour= :hour AND sc.date= :date", {
      hour: payload.hour,
      date: payload.date,
    })
    .getOne();

  if (realEstateSchedules) {
    throw new AppError(
      "Schedule to this real estate at this date and time already exists",
      409
    );
  }

  const schedule: Schedule = scheduleRepo.create({
    ...payload,
    user,
    real_estate,
  });
  await scheduleRepo.save(schedule);
  const messages = { message: "Schedule created" };
  return messages;
};

export default { create };
