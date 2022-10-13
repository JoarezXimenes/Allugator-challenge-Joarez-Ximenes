import { User } from '../entities/User';
import 'dotenv/config';
import * as jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET;


const generateToken = async (user: User) => {
  const {id, userName, email} = user;
  const payload = { id, userName, email };
  const token = jwt.sign(payload, (JWT_SECRET as string), { expiresIn: '1d', algorithm: 'HS256' });
  return token as string;
}

export { generateToken }