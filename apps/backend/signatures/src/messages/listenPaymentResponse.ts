import { Kafka } from 'kafkajs';
import 'dotenv/config';
import { updateteSignature } from '../use-cases/update-signature';
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


async function listenPaymentResponse() {
  const consumer = kafka.consumer({ groupId: 'payment-request', allowAutoTopicCreation: true })

  await consumer.connect()
  await consumer.subscribe({ topic: 'payment-response' })

  await consumer.run({
    eachMessage: async ({ message }) => {
      const checkoutJSON = message.value?.toString();

      if (!checkoutJSON) {
        return;
      }
      const signature = JSON.parse(checkoutJSON)
      const { signatureId } = signature;
      await updateteSignature.updateSignature(signatureId)
    },
  })
}

export { listenPaymentResponse }

// listenPaymentResponse().then(() => {
//   console.log('Listening to Kafka messages')
// })