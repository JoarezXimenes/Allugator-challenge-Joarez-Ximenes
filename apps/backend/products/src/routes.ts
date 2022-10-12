import { Router } from "express";
import { getAllProductsController } from "./use-cases/get-all-products";

const router = Router();

router.get('/products', (request, response) => {
  return getAllProductsController.handle(request, response); 
})

export { router }