import { Router } from "express";
import { registerUSerController } from "../register-user";

const registerUserRouter = Router();
registerUserRouter.post('/register',(req, res) => {return registerUSerController.handle(req, res)})

export { registerUserRouter }