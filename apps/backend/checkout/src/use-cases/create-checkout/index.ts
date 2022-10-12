import { Messenger } from "../../messages/kafka";
import { ProductProvider } from "../../providers/implementations/ProductProvider";
import { CreateCheckoutController } from "./CreateCheckoutController";
import { CreateCheckoutUseCase } from "./CreateCheckoutUseCase";

const productProvider = new ProductProvider();

const createChekoutUseCase = new CreateCheckoutUseCase(productProvider);

const messenger = new Messenger

const createCheckoutController = new CreateCheckoutController(createChekoutUseCase, messenger);

export { createCheckoutController };