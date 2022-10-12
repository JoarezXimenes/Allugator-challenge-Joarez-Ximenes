export interface IProduct{
  id: string;
  productName: string;
  price: number;
  image: string;
  description: string;
}

export class Checkout {
  private _userId: string;
  private _product: IProduct;

  constructor(userId: string, product: IProduct){
    this._userId = userId;
    this._product = product;
  }

  get userId() {
    return this._userId;
  }

  get product() {
    const { id, productName, price, image, description } = this._product;

    return {
      id,
      productName,
      price,
      image,
      description
    }
  }
}