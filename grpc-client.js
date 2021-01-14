const inspector_pb = require("./static_codegen/inspector_pb");
const inspector_grpc_pb = require("./static_codegen/inspector_grpc_pb");
const grpc = require("@grpc/grpc-js");

const address = "100.100.20.4:50051";

const credentials = grpc.credentials.createInsecure();

const Inspector = new inspector_grpc_pb.InspectorClient(address, credentials);


const connectSession = Inspector.connect();

connectSession.on("data", response => {
  const token = response.getToken();
  console.log(token);
});

connectSession.on("error", error => {
  console.log(error);
});

const request = new inspector_pb.ConnectRequest();
connectSession.write(request);