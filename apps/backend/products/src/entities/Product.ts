export interface ProductProps {
  id: string;
  productName: string;
  price: number;
  image: string;
  description?: string;
}

export class Product {
  private props: ProductProps

  constructor(props: ProductProps) {
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