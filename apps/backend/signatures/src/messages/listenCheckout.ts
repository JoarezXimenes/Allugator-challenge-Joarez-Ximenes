import { Kafka } from 'kafkajs';
import 'dotenv/config';
import { Checkout } from '../entities/Checkout';
import { createSignature } from '../use-cases/create-signature';
// Este serviço serve apenas para demonstrar o uso do kafka com microservices
// então digamos que o cliente fez a assinatura de uma produto
// depois fez aquele PIX e pagamento confirmado =D
// então essa API de pagamentos envia outra mensagem para o services, para confirmar a assinatura
// 

const KAFKA_HOST = process.env.KAFKA_HOST;

const kafka = new Kafka({
  brokers: [`${KAFKA_HOST}:9092`],
  clientId: 'payment-request',
})

async function send(checkoutJSON: object) {
  const producer = kafka.producer();
  await producer.connect();
  console.log(checkoutJSON);
  
  await producer.send({
    topic: 'payment-request',
    messages: [{ value: JSON.stringify(checkoutJSON) }]
  })
}

async function listenCheckout() {
  const consumer = kafka.consumer({ groupId: 'payment-request', allowAutoTopicCreation: true })

  await consumer.connect()
  await consumer.subscribe({ topic: 'checkout' })

  await consumer.run({
    eachMessage: async ({ message }) => {
      const checkoutJSON = message.value?.toString();

      if (!checkoutJSON) {
        return;
      }
      console.log(JSON.parse(checkoutJSON));
      
      const parsedCheckout = JSON.parse(checkoutJSON);
      const { userId } = parsedCheckout;
      const { id, productName, price, image, description } = parsedCheckout.product;
      const checkout = new Checkout(userId, { id, productName, price, image, description })
      console.log(checkout);
      
      const signatureId = await createSignature.createSignature(checkout);
      console.log(signatureId);
      
      send({
        signatureId: signatureId
      })
    },
  })
}

export {listenCheckout};

// listenCheckout().then(() => {
//   console.log('Listening to Kafka messages')
// })