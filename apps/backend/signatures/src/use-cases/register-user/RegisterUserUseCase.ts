import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { RegisterUserDTO } from "./RegisterUserDTO";
import { generateToken } from "../../auth/generateJWT";


export class RegisterUserUseCase {
  constructor(
    private userRepository: IUsersRepository
  ){}

  async execute(user: RegisterUserDTO) {

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const validEmail = emailRegex.test(user.email)
    if (!user.email || !user.password || !user.userName || !validEmail) {
      throw new Error('Todos os campos devem ser preenchidos corretamente')
    }

    const userAlredyExists = await this.userRepository.findByEmail(user.email);
    if (userAlredyExists) {
      throw new Error('Já existe uma conta com o email informado')
    }

    const newUser = new User(user);
    const createdUser = await this.userRepository.createUser(newUser);
    const jwtToken = await generateToken(createdUser)
    return jwtToken;
  }
}