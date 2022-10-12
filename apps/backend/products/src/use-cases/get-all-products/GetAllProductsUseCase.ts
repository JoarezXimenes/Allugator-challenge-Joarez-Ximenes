import { IProductsRepository } from '../../repositories/IProductsRepository';

export class GetAllProductsUseCase {
  constructor(
    private productsRepository: IProductsRepository
  ) {}
  
  async execute() {
    const products = this.productsRepository.getAllProducts();

    if(!products) throw new Error('Server error')

    return products;
  }
}