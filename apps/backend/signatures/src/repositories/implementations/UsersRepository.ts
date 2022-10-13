import { User } from "../../entities/User";
import { Users } from "../../database/models/Users";
import { IUsersRepository } from "../IUsersRepository";

export class UsersRepository implements IUsersRepository {
  constructor(
    private usersModel = Users
  ){}

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.usersModel.findOne({
      where:{
        email
      },
      raw: true
    });
    
    if (!user) return null;

    return user as unknown as User;
  }
  async createUser(user: User): Promise<User> {
    const { id, userName, email, password } = user;
    await this.usersModel.create({ id, userName, email, password });
    
    
    return { id, userName, email, password } as User;
  }
  async findById(id: string): Promise<User | null> {
    const user = await this.usersModel.findByPk(id);

    return user as unknown as User;
  }

}
