import { AppDataSource } from "../data-source";
import { Category } from "../entities";
import { CategoryRead, CategoryRepo, categoryCreate } from "../interfaces";
import { categorySchema } from "../schemas";

const create = async (payload: categoryCreate): Promise<categoryCreate> => {
    const categoryRepository: CategoryRepo = AppDataSource.getRepository(Category);
    const category: Category = categoryRepository.create(payload);
    await categoryRepository.save(category);
  
    return categorySchema.parse(category);
  };

  const read = async (): Promise<CategoryRead> => {
    const categoryRepository:CategoryRepo = AppDataSource.getRepository(Category);
   return await categoryRepository.find();
     
  };

  export default{ create,read}