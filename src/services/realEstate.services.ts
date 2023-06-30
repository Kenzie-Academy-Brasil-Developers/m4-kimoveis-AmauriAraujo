import { AppDataSource } from "../data-source";
import { Address, Category, RealEstate } from "../entities";
import { AppError } from "../errors";
import {
  CategoryRepo,
  addressCreate,
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

  const verifyAddress: Address | null = await addressRepository.findOneBy({
    number: String(payload.address.number),
  });
  const verifyAddressStreet: Address | null = await addressRepository.findOneBy(
    { street: payload.address.street }
  );
  const verifyAddressCity: Address | null = await addressRepository.findOneBy({
    city: payload.address.city,
  });
  const verifyAddressState: Address | null = await addressRepository.findOneBy({
    state: payload.address.state,
  });

  if (
    verifyAddress &&
    verifyAddressStreet &&
    verifyAddressCity &&
    verifyAddressState
  )
    throw new AppError("Address already exists", 409);

  const address: addressCreate = addressRepository.create(payload.address);

  await addressRepository.save(address);

  const category: Category | null = await categoryRepository.findOneBy({
    id: Number(payload.categoryId),
  });

  if (!category) throw new AppError("Category not found", 404);

  const realEstate: RealEstate = realEstateRepository.create({
    ...payload,
    address: address,
    category: category,
  });
  await realEstateRepository.save(realEstate);

  return realEstate;
};

const read = async (): Promise<RealEstate[]> => {
  const realEstateRepository: realEstateRepo =
    AppDataSource.getRepository(RealEstate);

  const reads: RealEstate[] = await realEstateRepository.find({
    relations: { address: true },
  });

  return reads;
};

export default { create, read };
