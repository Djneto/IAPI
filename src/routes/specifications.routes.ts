import { Router } from "express";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

const spacificationsRoutes = Router();

spacificationsRoutes.post("/", (request, response) => {
    return createSpecificationController.handle(request, response);
});

export { spacificationsRoutes };