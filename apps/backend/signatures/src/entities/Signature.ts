import { uuid } from "uuidv4";

export interface ISignature {
  id?: string;
  userId: string;
  productId: string;
  active?: boolean;
}

export class Signature {
  private _id: string;
  private _userId: string;
  private _productId: string;
  private _active: boolean;

  constructor(props: ISignature) {
    this._productId = props.productId
    this._userId = props.userId
    this._active = false;
    this._id = this.verifyId(props.id)
  }
  verifyId(id:string | undefined): string{
    if (!id) return uuid();
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