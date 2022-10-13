import { RegisterUserUseCase } from "./RegisterUserUseCase";
import { Request, Response } from "express";

export class RegisterUserController {
  constructor(
    private registerUserUseCase: RegisterUserUseCase
  ){}

  async handle(req: Request, res: Response): Promise<Response>{
    try {
      const { userName, email, password } = req.body;
      const token = await this.registerUserUseCase.execute({userName, email, password});
      return res.status(201).json({token});
    } catch (err) {
      if (err instanceof Error) {
        return res.status(401).json({message: err.message || 'Server error'})
      }
      return res.status(401).json({message: 'Server error'});
    }
  }
}