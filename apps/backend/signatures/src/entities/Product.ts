export interface IProduct {
  id: string;
  productName: string;
  price: number;
  image: string;
  description: string;
}

export class Product {
  private props: IProduct

  constructor(props: IProduct) {
    this.props = props;
  }

  get id() {
    return this.props.id;
  }

  get productName() {
    return this.props.productName;
  }

  get price() {
    return this.props.price;
  }

  get image() {
    return this.props.image;
  }

  get description() {
    return this.props.description;
  }
}