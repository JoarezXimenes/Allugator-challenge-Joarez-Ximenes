import { Router } from "express";
import { getSignaturesController } from "../use-cases/get-signatures";
import { verifyJWT } from "../auth/verifyJWT";
const signaturesRouter = Router();
signaturesRouter.get('/signatures',verifyJWT ,async (req, res) => {return await getSignaturesController.handle(req, res)})

export { signaturesRouter }