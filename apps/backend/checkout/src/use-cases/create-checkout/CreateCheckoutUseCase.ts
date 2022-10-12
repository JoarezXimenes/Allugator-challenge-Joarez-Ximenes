import { IProductProvider } from '../../providers/IProductProvider';

export class CreateCheckoutUseCase {
  constructor(
    private productProvider: IProductProvider
  ) {}

  async execute(productId: string) {
    const product = await this.productProvider.getProductById(productId);

    if (!product) throw new Error('Unavailable Product')

    return product;
  }
}