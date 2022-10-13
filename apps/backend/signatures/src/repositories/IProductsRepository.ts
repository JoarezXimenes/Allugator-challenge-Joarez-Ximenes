import { IProduct, Product } from "../entities/Product";

export interface IProductsRepository {
  getProductById(id: string): Promise<IProduct | null>;
  saveProduct(product: Product): Promise<void>;
}