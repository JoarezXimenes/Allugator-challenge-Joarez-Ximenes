import { Request, Response } from "express";
import { GetAllProductsUseCase } from "./GetAllProductsUseCase";

export class GetAllProductsController {
  constructor(
    private getAllProductsUseCase : GetAllProductsUseCase
  ) {}
  
  public async handle(req: Request, res: Response) {
    try {
      const products = await this.getAllProductsUseCase.execute();
      return res.status(200).json(products);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({
          message: error.message || 'Server error'
        })
      }
      return res.status(500).json({ message: 'Server error' });
    }
  }
}