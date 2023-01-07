import { Category } from "../../model/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
import { Request, Response } from "express";


class ListCategoriesUseCase {

    constructor(private categoryRepository: ICategoriesRepository){}

    execute(request: Request, response: Response): Category[]{
        const categories = this.categoryRepository.list();
        return categories;
    }

}

export { ListCategoriesUseCase };