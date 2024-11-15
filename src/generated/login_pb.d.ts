import * as jspb from 'google-protobuf'



export class LoginRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): LoginRequest;

  getPassword(): string;
  setPassword(value: string): LoginRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
  static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginRequest;
  static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
  export type AsObject = {
    email: string,
    password: string,
  }
}

export class AuthResponse extends jspb.Message {
  getJwt(): string;
  setJwt(value: string): AuthResponse;

  getUsertype(): string;
  setUsertype(value: string): AuthResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthResponse): AuthResponse.AsObject;
  static serializeBinaryToWriter(message: AuthResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthResponse;
  static deserializeBinaryFromReader(message: AuthResponse, reader: jspb.BinaryReader): AuthResponse;
}

export namespace AuthResponse {
  export type AsObject = {
    jwt: string,
    usertype: string,
  }
}

export class SignUpRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): SignUpRequest;

  getPassword(): string;
  setPassword(value: string): SignUpRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignUpRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SignUpRequest): SignUpRequest.AsObject;
  static serializeBinaryToWriter(message: SignUpRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignUpRequest;
  static deserializeBinaryFromReader(message: SignUpRequest, reader: jspb.BinaryReader): SignUpRequest;
}

export namespace SignUpRequest {
  export type AsObject = {
    email: string,
    password: string,
  }
}

export class GoogleLoginRequest extends jspb.Message {
  getIdToken(): string;
  setIdToken(value: string): GoogleLoginRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoogleLoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GoogleLoginRequest): GoogleLoginRequest.AsObject;
  static serializeBinaryToWriter(message: GoogleLoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoogleLoginRequest;
  static deserializeBinaryFromReader(message: GoogleLoginRequest, reader: jspb.BinaryReader): GoogleLoginRequest;
}

export namespace GoogleLoginRequest {
  export type AsObject = {
    idToken: string,
  }
}

