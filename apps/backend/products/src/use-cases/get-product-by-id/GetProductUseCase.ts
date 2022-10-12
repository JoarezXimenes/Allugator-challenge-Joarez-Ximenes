import { IProductsRepository } from '../../repositories/IProductsRepository';

export class GetProductUseCase {
  constructor(
    private productsRRepository: IProductsRepository
  ){}

  async execute(id: string) {
    const product = await this.productsRRepository.getProductById(id);

    if (!product) throw new Error('Server error');

    return product;
  }
}