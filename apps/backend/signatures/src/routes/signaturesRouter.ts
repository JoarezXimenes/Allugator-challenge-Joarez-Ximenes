import { Router } from "express";
import { getSignaturesController } from "../use-cases/get-signatures";

const signaturesRouter = Router();
signaturesRouter.get('/signatures',(req, res) => {return getSignaturesController.handle(req, res)})

export { signaturesRouter }