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

    return products as unknown as Product[];
  }
  async getProductById(id: string): Promise<Product> {
    const product = await this.productsModel.findByPk(id);

    return product as unknown as Product;
  }
}