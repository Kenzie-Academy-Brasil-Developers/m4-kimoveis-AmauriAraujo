import { AppDataSource } from "../data-source";
import { Category } from "../entities";
import { CategoryRepo, categoryCreate } from "../interfaces";
import { categorySchema } from "../schemas";

const create = async (payload: categoryCreate): Promise<categoryCreate> => {
    const userRepository: CategoryRepo = AppDataSource.getRepository(Category);
    const category: Category = userRepository.create(payload);
    await userRepository.save(category);
  
    return categorySchema.parse(category);
  };

  export default{ create}