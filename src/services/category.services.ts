import { AppDataSource } from "../data-source";
import { Category, RealEstate } from "../entities";
import { AppError } from "../errors";
import {
  CategoryRead,
  CategoryRepo,
  CategoryReturn,
  categoryCreate,
} from "../interfaces";
import { categorySchema } from "../schemas";

const create = async (payload: categoryCreate): Promise<categoryCreate> => {
  const categoryRepository: CategoryRepo =
    AppDataSource.getRepository(Category);

  const category: Category = categoryRepository.create(payload);

  await categoryRepository.save(category);

  return categorySchema.parse(category);
};

const read = async (): Promise<CategoryRead> => {
  const categoryRepository: CategoryRepo =
    AppDataSource.getRepository(Category);
  return await categoryRepository.find();
  
};
const retrieve = async (categoryId: string): Promise<CategoryReturn> => {
  const categoryRepository: CategoryRepo =
    AppDataSource.getRepository(Category);

  const category: Category | null = await categoryRepository.findOne({
    where: { id: Number(categoryId) },
    relations: { realEstate: true },
  });

  if (!category) throw new AppError("Category not found", 404);

  return category;
};

export default { create, read, retrieve };
