import { Kafka } from 'kafkajs';
import 'dotenv/config';
// Este serviço serve apenas para demonstrar o uso do kafka com microservices
// então digamos que o cliente fez a assinatura de uma produto
// depois fez aquele PIX e pagamento confirmado =D
// então essa API de pagamentos envia outra mensagem para o services, para confirmar a assinatura
// 

const KAFKA_HOST = process.env.KAFKA_HOST;

const kafka = new Kafka({
  brokers: [`${KAFKA_HOST}:9092`],
  clientId: 'payment-response',
})

async function send(checkoutJSON: string) {
  const producer = kafka.producer();
  await producer.connect();
  console.log(checkoutJSON);
  await producer.send({
    topic: 'payment-response',
    messages: [{ value: checkoutJSON }]
  })
}

async function listen() {
  const consumer = kafka.consumer({ groupId: 'payment-response', allowAutoTopicCreation: true })

  await consumer.connect()
  await consumer.subscribe({ topic: 'payment-request' })

  await consumer.run({
    eachMessage: async ({ message }) => {
      const checkoutJSON = message.value?.toString();

      if (!checkoutJSON) {
        return;
      }
      console.log(checkoutJSON);
      
      send(checkoutJSON)
    },
  })
}

listen().then(() => {
  console.log('Listening to payment-request')
})