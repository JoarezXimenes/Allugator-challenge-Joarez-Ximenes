import express from "express";
import httpProxy from 'express-http-proxy';
import 'dotenv/config'
import { createProxyMiddleware } from "http-proxy-middleware";


const app = express();

const PORT = process.env.APP_PORT || 4000;

// const productsApi = httpProxy("http://localhost:4001");
// const signaturesApi = httpProxy("http://localhost:4004");
// const checkoutApi = httpProxy("http://localhost:4002");

app.get("/", (req, res) => {
  return res.json({message: "ok"})
})

app.use(
  '/product/:id',
  createProxyMiddleware({
    target: 'http://products:4001'
  })
);

app.use(
  '/products',
  createProxyMiddleware({
    target: 'http://products:4001',
    changeOrigin: true,
  })
);





app.use(
  '/login',
  createProxyMiddleware({
    target: 'http://signatures:4004',
    changeOrigin: true,
  })
);
app.use(
  '/register',
  createProxyMiddleware({
    target: 'http://signatures:4004',
    changeOrigin: true,
  })
);

app.use(
  '/signatures',
  createProxyMiddleware({
    target: 'http://signatures:4004',
    changeOrigin: true,
  })
);

app.use(
  '/checkout',
  createProxyMiddleware({
    target: 'http://checkout:4002',
    changeOrigin: true,
  })
);







app.listen(PORT, () => {
  console.log(`ouvindo na porta ${PORT}`);
})