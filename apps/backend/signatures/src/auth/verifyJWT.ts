import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import 'dotenv/config';

const JWT_SECRET = process.env.JWT_SECRET || 'jwt_secret';

export interface Data {
  id: string
}

export interface jwtRequest extends Request {
  userData: Data
}

const verifyJWT = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token not found' });
  try {
    const decodedToken = jwt.verify(authorization as string, JWT_SECRET);
    console.log(decodedToken);
    
    req.body = {...req.body, ...decodedToken as Data};
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
};

export { verifyJWT };