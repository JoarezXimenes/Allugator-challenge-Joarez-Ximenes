import { Checkout } from "../entities/Checkout";

export interface IMessenger {
  sendMessage(checkout: Checkout): Promise<boolean>;
}