import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { RegisterUserController } from "./RegisterUserController";
import { RegisterUserUseCase } from "./RegisterUserUseCase";

const usersRepository = new UsersRepository();

const registerUserUseCase = new RegisterUserUseCase(usersRepository);

const registerUSerController = new RegisterUserController(registerUserUseCase);

export { registerUSerController }