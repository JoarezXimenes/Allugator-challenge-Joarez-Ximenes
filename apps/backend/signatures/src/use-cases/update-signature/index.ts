import { SignaturesRepository } from "../../repositories/implementations/SignaturesRepository";
import { UpdateSignature } from "./UpdateSignature";


const signaturesRepository = new SignaturesRepository();


const updateteSignature = new UpdateSignature(signaturesRepository);

export { updateteSignature};