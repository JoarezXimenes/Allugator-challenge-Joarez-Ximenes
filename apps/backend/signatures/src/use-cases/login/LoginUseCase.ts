import { IUsersRepository } from "../../repositories/IUsersRepository";
import * as bcrypt from 'bcryptjs';
import { LoginDTO } from "./LoginDTO";
import { generateToken } from "../../auth/generateJWT";


export class LoginUseCase {
  constructor(
    private userRepository: IUsersRepository
  ){}

  async execute(data: LoginDTO) {

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const validEmail = emailRegex.test(data.email);
    
    if (!data.email || !data.password || !validEmail) {
      throw new Error('Todos os campos devem ser preenchidos corretamente')
    }

    const user = await this.userRepository.findByEmail(data.email);
    if (!user) {
      throw new Error('Email ou senha incorretos')
    }
    

    const validPassword = bcrypt.compareSync(data.password, user.password);
    if (!validPassword) {
      throw new Error('Email ou senha incorretos')
    }

    const jwtToken = await generateToken(user)
    return jwtToken;
  }
}