import { User } from "../entities/User";

export interface IUsersRepository {
  findByEmail(email: string): Promise<User | null>;
  createUser(user: User): Promise<User>;
  findById(id: string): Promise<User | null>;
}