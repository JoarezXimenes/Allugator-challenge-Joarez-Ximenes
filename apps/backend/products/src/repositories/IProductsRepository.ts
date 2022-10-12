import { Product } from '../entities/Product';

export interface IProductsRepository {
  getAllProducts(): Promise<Product[]>;
  getProductById(id: string): Promise<Product>;
}