import { Request, Response } from "express";
import { jwtRequest } from "../../auth/verifyJWT";
import { GetSignaturesUseCase } from "./GetSignaturesUseCase";

export class GetSignaturesController {
  constructor(
    private getSignaturesUseCase: GetSignaturesUseCase
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.body; 

      const signatures = await this.getSignaturesUseCase.execute(id);
  
      return res.status(200).json(signatures);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(401).json({message: err.message || 'Server error'})
      }
      return res.status(401).json({message: 'Server error'});
    }
  }
}