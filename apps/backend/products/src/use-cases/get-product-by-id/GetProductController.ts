import { GetProductUseCase } from "./GetProductUseCase";
import { Request, Response } from "express";

export class GetProductController {
  constructor(
    private getProductsUseCase: GetProductUseCase
  ) {}

  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params
      const product = await this.getProductsUseCase.execute(id);
      return res.status(200).json(product)
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({message: error.message || 'Server error'});
      }

      return res.status(500).json({message: 'Server error'});
    }
  }
}