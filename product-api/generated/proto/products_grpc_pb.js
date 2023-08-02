// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_products_pb = require('../proto/products_pb.js');

function serialize_ProductRequest(arg) {
  if (!(arg instanceof proto_products_pb.ProductRequest)) {
    throw new Error('Expected argument of type ProductRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ProductRequest(buffer_arg) {
  return proto_products_pb.ProductRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ProductResponse(arg) {
  if (!(arg instanceof proto_products_pb.ProductResponse)) {
    throw new Error('Expected argument of type ProductResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ProductResponse(buffer_arg) {
  return proto_products_pb.ProductResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ProductServiceService = exports.ProductServiceService = {
  getProduct: {
    path: '/ProductService/GetProduct',
    requestStream: false,
    responseStream: false,
    requestType: proto_products_pb.ProductRequest,
    responseType: proto_products_pb.ProductResponse,
    requestSerialize: serialize_ProductRequest,
    requestDeserialize: deserialize_ProductRequest,
    responseSerialize: serialize_ProductResponse,
    responseDeserialize: deserialize_ProductResponse,
  },
};

exports.ProductServiceClient = grpc.makeGenericClientConstructor(ProductServiceService);
