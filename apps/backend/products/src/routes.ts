import { Router } from "express";
import { getAllProductsController } from "./use-cases/get-all-products";
import { getProductController } from "./use-cases/get-product-by-id";

const router = Router();

router.get('/products', (request, response) => { return getAllProductsController.handle(request, response)})
router.get('/product/:id', (request, response) => { return getProductController.handle(request, response)})

export { router }