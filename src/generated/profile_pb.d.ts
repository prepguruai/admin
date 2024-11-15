import * as jspb from 'google-protobuf'



export class UserProfileProto extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): UserProfileProto;

  getName(): string;
  setName(value: string): UserProfileProto;

  getPhotourl(): string;
  setPhotourl(value: string): UserProfileProto;

  getGender(): Gender;
  setGender(value: Gender): UserProfileProto;

  getCreatedon(): number;
  setCreatedon(value: number): UserProfileProto;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserProfileProto.AsObject;
  static toObject(includeInstance: boolean, msg: UserProfileProto): UserProfileProto.AsObject;
  static serializeBinaryToWriter(message: UserProfileProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserProfileProto;
  static deserializeBinaryFromReader(message: UserProfileProto, reader: jspb.BinaryReader): UserProfileProto;
}

export namespace UserProfileProto {
  export type AsObject = {
    userid: string,
    name: string,
    photourl: string,
    gender: Gender,
    createdon: number,
  }
}

export class CreateProfileRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateProfileRequest;

  getGender(): Gender;
  setGender(value: Gender): CreateProfileRequest;

  getPhotourl(): string;
  setPhotourl(value: string): CreateProfileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateProfileRequest): CreateProfileRequest.AsObject;
  static serializeBinaryToWriter(message: CreateProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateProfileRequest;
  static deserializeBinaryFromReader(message: CreateProfileRequest, reader: jspb.BinaryReader): CreateProfileRequest;
}

export namespace CreateProfileRequest {
  export type AsObject = {
    name: string,
    gender: Gender,
    photourl: string,
  }
}

export class IdRequest extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): IdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IdRequest): IdRequest.AsObject;
  static serializeBinaryToWriter(message: IdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdRequest;
  static deserializeBinaryFromReader(message: IdRequest, reader: jspb.BinaryReader): IdRequest;
}

export namespace IdRequest {
  export type AsObject = {
    userid: string,
  }
}

export enum Gender { 
  UNSPECIFIED = 0,
  MALE = 1,
  FEMALE = 2,
}
