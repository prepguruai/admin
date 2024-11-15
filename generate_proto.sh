rm -Rf src/generated 
mkdir src/generated

# protoc -I="..\\..\\proto" --plugin=protoc-gen-ts_proto=".\\node_modules\\.bin\\protoc-gen-ts_proto.cmd" --ts_proto_out="src\\generated" --ts_proto_opt=outputClientImpl=grpc-web ..\..\proto\*.proto

protoc -I="../../proto" ../../proto/*.proto \
  --js_out=import_style=commonjs,binary:"src/generated" \
  --grpc-web_out=import_style=typescript,mode=grpcweb:"src/generated"
