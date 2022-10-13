import { LoginUseCase } from "./LoginUseCase";
import { Request, Response } from "express";

export class LoginController {
  constructor(
    private loginUseCase: LoginUseCase
  ){}

  async handle(req: Request, res: Response): Promise<Response>{
    try {
      const { email, password } = req.body;
      const token = await this.loginUseCase.execute({ email, password });
      return res.status(201).json({token});
    } catch (err) {
      if (err instanceof Error) {
        return res.status(401).json({message: err.message})
      }
      return res.status(401).json({message: 'Server error'});
    }
  }
}

