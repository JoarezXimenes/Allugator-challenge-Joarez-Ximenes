import { Router } from "express";
import { app } from "./app";
import { verifyToken } from "./auth/verifyToken";
import { createCheckoutController } from "./use-cases/create-checkout";

const router = Router();
router.post('/checkout', verifyToken, (request, response) => {return createCheckoutController.handle(request, response)})

export { router }