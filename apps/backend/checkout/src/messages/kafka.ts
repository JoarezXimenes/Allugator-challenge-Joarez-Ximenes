import { Kafka } from 'kafkajs';
import 'dotenv/config';
import { IMessenger } from './IMessenger';
import { Checkout } from '../entities/Checkout';

const KAFKA_HOST = process.env.KAFKA_HOST;

const kafka = new Kafka({
  clientId: 'checkout',
  brokers: [`${KAFKA_HOST}:9092`],
})

export class Messenger implements IMessenger {
  async sendMessage(checkout: Checkout): Promise<boolean> {
    const { userId } = checkout;
    const { id, productName, price, image, description } = checkout.product;
    const checkoutObject = {
      userId,
      product: { id, productName, price, image, description }
    }
    
    const producer = kafka.producer();
    await producer.connect();
    await producer.send({
      topic: 'checkout',
      messages: [{ value: JSON.stringify(checkoutObject) }]
    })

    return true;
  }
}