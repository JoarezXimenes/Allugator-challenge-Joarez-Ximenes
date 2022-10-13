import { IUser, User } from "../../entities/User";
import { Users } from "../../database/models/Users";
import { IUsersRepository } from "../IUsersRepository";

export class UsersRepository implements IUsersRepository {
  constructor(
    private usersModel = Users
  ){}

  async findByEmail(email: string): Promise<IUser | null> {
    const user = await this.usersModel.findOne({
      where:{
        email
      }
    });
    if (!user) return null;

    return user as unknown as IUser;
  }
  async createUser(user: User): Promise<IUser> {
    const { id, userName, email, password } = user;
    const createdUser = await this.usersModel.build({ id, userName, email, password });
    await createdUser.save();
    return createdUser as unknown as IUser;
  }
  async findById(id: string): Promise<IUser | null> {
    const user = await this.usersModel.findByPk(id);

    return user as unknown as IUser;
  }

}
