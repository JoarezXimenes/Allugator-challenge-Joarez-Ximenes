import { IProduct, Product } from "../../entities/Product";
import { Products } from "../../database/models/Products";
import { IProductsRepository } from "../IProductsRepository";

export class ProductsRepository implements IProductsRepository{
  constructor(
    private productsModel = Products
  ){}

  async getProductById(id: string): Promise<IProduct | null> {

    const product = await this.productsModel.findByPk(id);
    
    return product as unknown as IProduct;
  }
  async saveProduct(product: Product): Promise<void> {
    
    const {id, productName, price, description, image} = product;
    await this.productsModel.create({id, productName, price, description, image})
  }

}