import { App } from './app';
import 'dotenv/config';
import { listenCheckout } from './messages/listenCheckout';
import { listenPaymentResponse } from './messages/listenPaymentResponse';

const PORT = process.env.APP_PORT || 4004;

new App().start(PORT);
listenCheckout().then(() => {
  console.log('Listening to checkout')
});
listenPaymentResponse().then(() => {
  console.log('Listening to payment-response')
})