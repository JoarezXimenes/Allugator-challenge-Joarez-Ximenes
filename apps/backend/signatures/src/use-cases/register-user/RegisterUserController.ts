import { RegisterUserUseCase } from "./RegisterUserUseCase";
import { Request, Response } from "express";

export class RegisterUserController {
  constructor(
    private registerUserUseCase: RegisterUserUseCase
  ){}

  async handle(req: Request, res: Response): Promise<Response>{
    const { userName, email, password } = req.body;
    const token = this.registerUserUseCase.execute({userName, email, password});
    return res.status(201).json({token});
  }
}