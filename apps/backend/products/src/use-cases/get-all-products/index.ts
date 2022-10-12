import { ProductsRepository } from '../../repositories/implementations/ProductsRepository';
import { GetAllProductsController } from './GetAllProductsController';
import { GetAllProductsUseCase } from './GetAllProductsUseCase';

const productsRepository = new ProductsRepository();

const getAllProductsUseCase = new GetAllProductsUseCase(productsRepository);

const getAllProductsController = new GetAllProductsController(getAllProductsUseCase);

export { getAllProductsController };