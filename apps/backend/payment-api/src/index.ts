import { Kafka } from 'kafkajs';

// Este serviço serve apenas para demonstrar o uso do kafka com microservices
// então digamos que o cliente fez a assinatura de uma produto
// depois fez aquele PIX e pagamento confirmado =D
// então essa API de pagamentos envia outra mensagem para o services, para confirmar a assinatura
// 

const kafka = new Kafka({
  brokers: ['kafka:9092'],
  clientId: 'payment-response',
})

async function send(checkoutJSON: string) {
  const producer = kafka.producer();
  await producer.connect();
  await producer.send({
    topic: 'payment-response',
    messages: [{ value: JSON.stringify(checkoutJSON) }]
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

      send(checkoutJSON)
    },
  })
}

listen().then(() => {
  console.log('[Classroom] Listening to Kafka messages')
})