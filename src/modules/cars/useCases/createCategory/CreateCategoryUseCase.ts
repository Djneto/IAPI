import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
    name: string,
    description: string
}

class CreateCategoryUseCase {
    // private categoriesRepository: ICategoriesRepository;
    
    constructor(private categoriesRepository: ICategoriesRepository) {
        // this.categoriesRepository = categoriesRepository
    }

    execute({ name, description}: IRequest): void{
        const categoryAlreadyExists = this.categoriesRepository.findByName(name);
        if(categoryAlreadyExists){
            throw new Error("Category Already Exists!");
        }
        this.categoriesRepository.create({name, description});
    }
}

export { CreateCategoryUseCase }