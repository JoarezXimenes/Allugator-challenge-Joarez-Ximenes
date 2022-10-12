import { Product } from '../entities/Product';

export interface IProductsRepository {
  getAllProducts(): Promise<Product[]>;
  getProductById(): Promise<Product>;
}