import { ISpecificationRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest{
    name: string;
    description: string;
}

class CreateSpecificationUseCase {
    // private specificationsRepository: ISpecificationRepository;
    constructor(private specificationsRepository: ISpecificationRepository) {
        // this.specificationsRepository = specificationsRepository;
    }

    execute({ name, description }: IRequest): void {
        const specificationAlreadyExists = this.specificationsRepository.findByName(name);

        if(specificationAlreadyExists){
            throw new Error("Specification Already Exists!")
        }

        this.specificationsRepository.create({
            name,
            description
        });
    }
}

export { CreateSpecificationUseCase }