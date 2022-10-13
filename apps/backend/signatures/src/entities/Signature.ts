import { v4 } from "uuid";


export class Signature {
  private _id: string;
  private _userId: string;
  private _productId: string;
  private _active: boolean;

  constructor(props: {productId: string, userId: string, id?: string}) {
    this._productId = props.productId
    this._userId = props.userId
    this._active = false;
    this._id = this.verifyId(props.id)
  }
  verifyId(id:string | undefined): string{
    if (!id) return v4();
    return id;
  }

  get id() {
    return this._id;
  }

  get userId() {
    return this._userId;
  }

  get productId() {
    return this._productId;
  }

  get active() {
    return this._active;
  }
}