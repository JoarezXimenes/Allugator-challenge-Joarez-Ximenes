import { SignaturesRepository } from "../../repositories/implementations/SignaturesRepository";
import { GetSignaturesController } from "./GetSignaturesController";
import { GetSignaturesUseCase } from "./GetSignaturesUseCase";

const signaturesRepository = new SignaturesRepository();

const getSignaturesUseCase = new GetSignaturesUseCase(signaturesRepository);

const getSignaturesController = new GetSignaturesController(getSignaturesUseCase)

export { getSignaturesController };