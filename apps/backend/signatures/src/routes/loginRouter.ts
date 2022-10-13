import { Router } from "express";
import { loginController } from "../use-cases/login";

const loginRouter = Router();
loginRouter.post('/login',(req, res) => {return loginController.handle(req, res)})

export { loginRouter }