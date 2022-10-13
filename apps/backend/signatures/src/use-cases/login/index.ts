import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { LoginController } from "./LoginController";
import { LoginUseCase } from "./LoginUseCase";

const usersRepository = new UsersRepository()

const loginUseCase = new LoginUseCase(usersRepository);

const loginController = new LoginController(loginUseCase);

export { loginController };