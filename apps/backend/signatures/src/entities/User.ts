import { uuid } from "uuidv4";

export interface IUser {
  id?: string;
  userName: string;
  email: string;
  password: string;
}

export class User {
  private _id: string;
  private _userName: string;
  private _email: string;
  private _password: string;

  constructor(props: IUser) {
    this._email = props.email
    this._userName = props.userName
    this._password = props.password
    this._id = this.verifyId(props.id)
  }
  verifyId(id:string | undefined): string{
    if (!id) return uuid();
    return id;
  }

  get id() {
    return this._id;
  }

  get userName() {
    return this._userName;
  }

  get email() {
    return this._email;
  }

  get password() {
    return this._password;
  }
}