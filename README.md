# node-js-grpc
  ## About
  This is project to show you how microservices comunicate each other.
  ## How to Start
  1. Clone this repository
  2. Start product api service : ```cd product-api && yarn start``` or using npm ```cd product-api && npm run start```
  3. Start client service using new terminal : ```cd client && yarn start``` or using npm ```cd client && npm run start```
  4. Test request to ```GET /get-product?id=1```
  5. Enjoy :)

  ## How it Works
  when the client service need product data, it will request to product service using gRPC protocols.
