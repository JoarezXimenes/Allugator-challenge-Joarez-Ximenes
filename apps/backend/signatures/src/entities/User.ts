import { v4 } from "uuid";


export class User {
  private _id: string;
  private _userName: string;
  private _email: string;
  private _password: string;

  constructor(props: { email: string, userName: string, password:string, id?: string }) {
    this._email = props.email
    this._userName = props.userName
    this._password = props.password
    this._id = this.verifyId(props.id)
  }
  verifyId(id:string | undefined): string{
    if (!id) return v4();
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