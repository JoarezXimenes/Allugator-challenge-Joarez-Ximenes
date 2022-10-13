import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { RegisterUserDTO } from "./RegisterUserDTO";
import { generateToken } from "../../auth/generateJWT";
import * as bcrypt from 'bcryptjs';


export class RegisterUserUseCase {
  constructor(
    private userRepository: IUsersRepository
  ){}

  async execute(user: RegisterUserDTO) {
    const { password, userName, email } = user

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const validEmail = emailRegex.test(email)
    if (!email || !password || !userName || !validEmail) {
      throw new Error('Todos os campos devem ser preenchidos corretamente')
    }

    const userAlredyExists = await this.userRepository.findByEmail(email);
    if (userAlredyExists) {
      throw new Error('Já existe uma conta com o email informado')
    }

    const salt = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(password, salt);
    const newUser = new User({ email, userName, password: passwordHash });
    
    const createdUser = await this.userRepository.createUser(newUser);
    
    const jwtToken = await generateToken(createdUser)
    
    return jwtToken;
  }
}