import { ProductsRepository } from "../../repositories/implementations/ProductsRepository";
import { SignaturesRepository } from "../../repositories/implementations/SignaturesRepository";
import { CreateSignature } from "./CreateSignature";

const signaturesRepository = new SignaturesRepository();

const productsRepository = new ProductsRepository();

const createSignature = new CreateSignature(signaturesRepository, productsRepository);

export { createSignature };