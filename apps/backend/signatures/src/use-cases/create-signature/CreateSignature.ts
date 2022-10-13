import { Product } from "../../entities/Product";
import { Checkout } from "../../entities/Checkout";
import { ProductsRepository } from "../../repositories/implementations/ProductsRepository";
import { SignaturesRepository } from "../../repositories/implementations/SignaturesRepository";
import { Signature } from "../../entities/Signature";

export class CreateSignature {
  constructor(
    private signaturesRepository: SignaturesRepository,
    private productsRepository: ProductsRepository
  ){}

  async createSignature(checkout: Checkout) {
    const { userId } = checkout;
    const { id, productName, price, image, description } = checkout.product;

    const productExists = await this.productsRepository.getProductById(id);
    if (!productExists) {
      const product = new Product({ id, productName, price, image, description })
      await this.productsRepository.saveProduct(product);
    }
    const signature = new Signature({productId: id, userId})
    await this.signaturesRepository.createSignature(signature);

    return (signature.id)
  }
}