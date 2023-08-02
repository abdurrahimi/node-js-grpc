const express = require('express');
const app = express();
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync('./proto/products.proto', {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const productsProto = grpc.loadPackageDefinition(packageDefinition).ProductService;

const client = new productsProto('localhost:50051', grpc.credentials.createInsecure());

app.get('/get-product', (req, res) => {
  const productId = req.query.product_id;

  //code below will get the product data from service product
  //on real case this will be the product that will process on this service
  //but for example we just return the product data as response
  client.GetProduct({ product_id: productId }, (err, response) => {
    if (err) {
      console.error('Error:', err);
      res.status(404).json({ error: 'Product not found' });
      return;
    }
    res.json(response.product);
  });
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server Express berjalan di http://localhost:${port}`);
});