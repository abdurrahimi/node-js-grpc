const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const express = require('express');

const packageDefinition = protoLoader.loadSync('./proto/products.proto', {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const productsProto = grpc.loadPackageDefinition(packageDefinition).ProductService;

// Sample products data
const products = [
  { id: '1', name: 'Product A', description: 'Description for Product A', price: 10.99 },
  { id: '2', name: 'Product B', description: 'Description for Product B', price: 15.99 },
];

function getProduct(call, callback) {
  const productId = call.request.product_id;
  const product = products.find((p) => p.id === productId);
  if (!product) {
    return callback({ code: grpc.status.NOT_FOUND, details: 'Product not found' });
  }
  callback(null, { product });
}

function main() {
  const app = express();
  const server = new grpc.Server();

  // Add the ProductService to the gRPC server
  server.addService(productsProto.service, {
    GetProduct: getProduct,
  });

  server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), (err, port) => {
    if (err) {
      console.error('Error binding server:', err);
      return;
    }
    console.log('gRPC Server berjalan di port 50051');

    server.start();
  });

  const port = 3000;
  app.listen(port, () => {
    console.log(`Server Express berjalan di http://localhost:${port}`);
  });
}

main();
