import { CreateCheckoutUseCase } from "./CreateCheckoutUseCase";
import { Request, Response } from "express";
import { jwtRequest } from "../../auth/verifyToken";
import { IMessenger } from "../../messages/IMessenger";
import { Checkout } from "../../entities/Checkout";

export class CreateCheckoutController {
  constructor(
    private createChekoutUseCase: CreateCheckoutUseCase,
    private messenger: IMessenger
  ){}

  async handle(req: Request, res: Response) {
    try {
      const { productId, id } = req.body;
      

      const product = await this.createChekoutUseCase.execute(productId);
      const checkout = new Checkout(id , product)

      await this.messenger.sendMessage(checkout)

      return res.status(201).json({ message: 'Pedido confirmado' });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({message: error.message || 'ServerError'});
      }
      return res.status(500).json({message: 'ServerError'});
    }
  }
}