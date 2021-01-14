// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var misc_inspector_pb = require('./inspector_pb.js');

function serialize_rpad_inspector_ConnectRequest(arg) {
  if (!(arg instanceof misc_inspector_pb.ConnectRequest)) {
    throw new Error('Expected argument of type rpad.inspector.ConnectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpad_inspector_ConnectRequest(buffer_arg) {
  return misc_inspector_pb.ConnectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpad_inspector_ConnectResponse(arg) {
  if (!(arg instanceof misc_inspector_pb.ConnectResponse)) {
    throw new Error('Expected argument of type rpad.inspector.ConnectResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpad_inspector_ConnectResponse(buffer_arg) {
  return misc_inspector_pb.ConnectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpad_inspector_GetElementChildrenRequest(arg) {
  if (!(arg instanceof misc_inspector_pb.GetElementChildrenRequest)) {
    throw new Error('Expected argument of type rpad.inspector.GetElementChildrenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpad_inspector_GetElementChildrenRequest(buffer_arg) {
  return misc_inspector_pb.GetElementChildrenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpad_inspector_GetElementChildrenResponse(arg) {
  if (!(arg instanceof misc_inspector_pb.GetElementChildrenResponse)) {
    throw new Error('Expected argument of type rpad.inspector.GetElementChildrenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpad_inspector_GetElementChildrenResponse(buffer_arg) {
  return misc_inspector_pb.GetElementChildrenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpad_inspector_GetElementTreePathRequest(arg) {
  if (!(arg instanceof misc_inspector_pb.GetElementTreePathRequest)) {
    throw new Error('Expected argument of type rpad.inspector.GetElementTreePathRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpad_inspector_GetElementTreePathRequest(buffer_arg) {
  return misc_inspector_pb.GetElementTreePathRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpad_inspector_GetElementTreePathResponse(arg) {
  if (!(arg instanceof misc_inspector_pb.GetElementTreePathResponse)) {
    throw new Error('Expected argument of type rpad.inspector.GetElementTreePathResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpad_inspector_GetElementTreePathResponse(buffer_arg) {
  return misc_inspector_pb.GetElementTreePathResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpad_inspector_GetRootElementResponse(arg) {
  if (!(arg instanceof misc_inspector_pb.GetRootElementResponse)) {
    throw new Error('Expected argument of type rpad.inspector.GetRootElementResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpad_inspector_GetRootElementResponse(buffer_arg) {
  return misc_inspector_pb.GetRootElementResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpad_inspector_InspectRequest(arg) {
  if (!(arg instanceof misc_inspector_pb.InspectRequest)) {
    throw new Error('Expected argument of type rpad.inspector.InspectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpad_inspector_InspectRequest(buffer_arg) {
  return misc_inspector_pb.InspectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpad_inspector_InspectResponse(arg) {
  if (!(arg instanceof misc_inspector_pb.InspectResponse)) {
    throw new Error('Expected argument of type rpad.inspector.InspectResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpad_inspector_InspectResponse(buffer_arg) {
  return misc_inspector_pb.InspectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpad_inspector_QuerySelectorRequest(arg) {
  if (!(arg instanceof misc_inspector_pb.QuerySelectorRequest)) {
    throw new Error('Expected argument of type rpad.inspector.QuerySelectorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpad_inspector_QuerySelectorRequest(buffer_arg) {
  return misc_inspector_pb.QuerySelectorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpad_inspector_QuerySelectorResponse(arg) {
  if (!(arg instanceof misc_inspector_pb.QuerySelectorResponse)) {
    throw new Error('Expected argument of type rpad.inspector.QuerySelectorResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpad_inspector_QuerySelectorResponse(buffer_arg) {
  return misc_inspector_pb.QuerySelectorResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpad_inspector_Void(arg) {
  if (!(arg instanceof misc_inspector_pb.Void)) {
    throw new Error('Expected argument of type rpad.inspector.Void');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpad_inspector_Void(buffer_arg) {
  return misc_inspector_pb.Void.deserializeBinary(new Uint8Array(buffer_arg));
}


var InspectorService = exports.InspectorService = {
  connect: {
    path: '/rpad.inspector.Inspector/Connect',
    requestStream: true,
    responseStream: true,
    requestType: misc_inspector_pb.ConnectRequest,
    responseType: misc_inspector_pb.ConnectResponse,
    requestSerialize: serialize_rpad_inspector_ConnectRequest,
    requestDeserialize: deserialize_rpad_inspector_ConnectRequest,
    responseSerialize: serialize_rpad_inspector_ConnectResponse,
    responseDeserialize: deserialize_rpad_inspector_ConnectResponse,
  },
  inspect: {
    path: '/rpad.inspector.Inspector/Inspect',
    requestStream: true,
    responseStream: true,
    requestType: misc_inspector_pb.InspectRequest,
    responseType: misc_inspector_pb.InspectResponse,
    requestSerialize: serialize_rpad_inspector_InspectRequest,
    requestDeserialize: deserialize_rpad_inspector_InspectRequest,
    responseSerialize: serialize_rpad_inspector_InspectResponse,
    responseDeserialize: deserialize_rpad_inspector_InspectResponse,
  },
  querySelector: {
    path: '/rpad.inspector.Inspector/QuerySelector',
    requestStream: false,
    responseStream: false,
    requestType: misc_inspector_pb.QuerySelectorRequest,
    responseType: misc_inspector_pb.QuerySelectorResponse,
    requestSerialize: serialize_rpad_inspector_QuerySelectorRequest,
    requestDeserialize: deserialize_rpad_inspector_QuerySelectorRequest,
    responseSerialize: serialize_rpad_inspector_QuerySelectorResponse,
    responseDeserialize: deserialize_rpad_inspector_QuerySelectorResponse,
  },
  getElementChildren: {
    path: '/rpad.inspector.Inspector/GetElementChildren',
    requestStream: false,
    responseStream: false,
    requestType: misc_inspector_pb.GetElementChildrenRequest,
    responseType: misc_inspector_pb.GetElementChildrenResponse,
    requestSerialize: serialize_rpad_inspector_GetElementChildrenRequest,
    requestDeserialize: deserialize_rpad_inspector_GetElementChildrenRequest,
    responseSerialize: serialize_rpad_inspector_GetElementChildrenResponse,
    responseDeserialize: deserialize_rpad_inspector_GetElementChildrenResponse,
  },
  getRootElement: {
    path: '/rpad.inspector.Inspector/GetRootElement',
    requestStream: false,
    responseStream: false,
    requestType: misc_inspector_pb.Void,
    responseType: misc_inspector_pb.GetRootElementResponse,
    requestSerialize: serialize_rpad_inspector_Void,
    requestDeserialize: deserialize_rpad_inspector_Void,
    responseSerialize: serialize_rpad_inspector_GetRootElementResponse,
    responseDeserialize: deserialize_rpad_inspector_GetRootElementResponse,
  },
  getElementTreePath: {
    path: '/rpad.inspector.Inspector/GetElementTreePath',
    requestStream: false,
    responseStream: false,
    requestType: misc_inspector_pb.GetElementTreePathRequest,
    responseType: misc_inspector_pb.GetElementTreePathResponse,
    requestSerialize: serialize_rpad_inspector_GetElementTreePathRequest,
    requestDeserialize: deserialize_rpad_inspector_GetElementTreePathRequest,
    responseSerialize: serialize_rpad_inspector_GetElementTreePathResponse,
    responseDeserialize: deserialize_rpad_inspector_GetElementTreePathResponse,
  },
};

exports.InspectorClient = grpc.makeGenericClientConstructor(InspectorService);
