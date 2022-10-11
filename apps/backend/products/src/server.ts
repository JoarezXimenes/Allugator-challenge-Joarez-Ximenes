import { App } from './app';
import 'dotenv/config';

const PORT = process.env.APP_PORT || 4001;

new App().start(PORT);