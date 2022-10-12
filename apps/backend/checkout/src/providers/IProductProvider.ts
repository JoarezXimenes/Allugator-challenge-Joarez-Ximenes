import { IProduct } from '../entities/Checkout';

export interface IProductProvider {
  getProductById(id: string): Promise<IProduct>;
}