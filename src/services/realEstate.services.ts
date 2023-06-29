import { AppDataSource } from "../data-source";
import { Address, Category, RealEstate } from "../entities";
import { AppError } from "../errors";
import {
  CategoryRepo,
  addressRepo,
  realEstateCreate,
  realEstateRepo,
} from "../interfaces";

const create = async (payload: realEstateCreate): Promise<RealEstate> => {
  const categoryRepository: CategoryRepo =
    AppDataSource.getRepository(Category);

  const addressRepository: addressRepo = AppDataSource.getRepository(Address);

  const realEstateRepository: realEstateRepo =
    AppDataSource.getRepository(RealEstate);

  const address: Address | null = await addressRepository.findOneBy({
    id: Number(payload.addressId),
  });

  // if (!address) throw new AppError("Address not found", 404);

  const category: Category | null = await categoryRepository.findOneBy({
    id: Number(payload.categoryId),
  });

  if (!category) throw new AppError("Category not found", 404);

  const realEstate: RealEstate = realEstateRepository.create({
    ...payload,
    // Address: address,
    Category: category,
  });
  await realEstateRepository.save(realEstate);

  return realEstate;
};

export default {create}
