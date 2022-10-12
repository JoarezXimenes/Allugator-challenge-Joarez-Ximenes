import { Product } from "../../entities/Product";
import { IProductsRepository } from "../IProductsRepository";
import Products from '../../database/models/Products';

export class ProductsRepository implements IProductsRepository {
  constructor(
    private productsModel = Products
  ) {}

  async getAllProducts(): Promise<Product[]> {
    const products = this.productsModel.findAll({
      attributes: {
        exclude: ['description']
      }
    });

    if (!products) throw new Error('Server error')

    return products as unknown as Product[];
  }
  getProductById(): Promise<Product> {
    throw new Error("Method not implemented.");
  }
  
}