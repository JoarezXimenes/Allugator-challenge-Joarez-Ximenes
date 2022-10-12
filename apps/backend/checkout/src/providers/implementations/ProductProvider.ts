import { IProduct } from "../../entities/Checkout";
import { IProductProvider } from "../IProductProvider";
import 'dotenv/config';
import fetch from 'node-fetch';

export class ProductProvider implements IProductProvider {
  async getProductById(id: string): Promise<IProduct> {
      const PRODUCT_API_URL = process.env.PRODUCT_API_URL || 'http://localhost:4001';

      const response = await fetch(`${PRODUCT_API_URL}/product/${id}`);
      if (!response.ok) throw new Error('Unavailable product')
      
      const data = await response.json();
      
  
      return data as unknown as IProduct;    
  }
}