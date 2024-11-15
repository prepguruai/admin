import * as jspb from 'google-protobuf'



export class ChatMessage extends jspb.Message {
  getTenant(): string;
  setTenant(value: string): ChatMessage;

  getMessage(): string;
  setMessage(value: string): ChatMessage;

  getChatid(): string;
  setChatid(value: string): ChatMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ChatMessage): ChatMessage.AsObject;
  static serializeBinaryToWriter(message: ChatMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatMessage;
  static deserializeBinaryFromReader(message: ChatMessage, reader: jspb.BinaryReader): ChatMessage;
}

export namespace ChatMessage {
  export type AsObject = {
    tenant: string,
    message: string,
    chatid: string,
  }
}

export class ChatReply extends jspb.Message {
  getReply(): string;
  setReply(value: string): ChatReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatReply.AsObject;
  static toObject(includeInstance: boolean, msg: ChatReply): ChatReply.AsObject;
  static serializeBinaryToWriter(message: ChatReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatReply;
  static deserializeBinaryFromReader(message: ChatReply, reader: jspb.BinaryReader): ChatReply;
}

export namespace ChatReply {
  export type AsObject = {
    reply: string,
  }
}

