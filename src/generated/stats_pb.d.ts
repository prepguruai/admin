import * as jspb from 'google-protobuf'



export class StatRequest extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): StatRequest;

  getTenant(): string;
  setTenant(value: string): StatRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StatRequest): StatRequest.AsObject;
  static serializeBinaryToWriter(message: StatRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatRequest;
  static deserializeBinaryFromReader(message: StatRequest, reader: jspb.BinaryReader): StatRequest;
}

export namespace StatRequest {
  export type AsObject = {
    userid: string,
    tenant: string,
  }
}

export class Stats extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): Stats;

  getAccuracy(): number;
  setAccuracy(value: number): Stats;

  getCorrect(): number;
  setCorrect(value: number): Stats;

  getTotal(): number;
  setTotal(value: number): Stats;

  getSubjectaccuracyList(): Array<SubjectAccuracy>;
  setSubjectaccuracyList(value: Array<SubjectAccuracy>): Stats;
  clearSubjectaccuracyList(): Stats;
  addSubjectaccuracy(value?: SubjectAccuracy, index?: number): SubjectAccuracy;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Stats.AsObject;
  static toObject(includeInstance: boolean, msg: Stats): Stats.AsObject;
  static serializeBinaryToWriter(message: Stats, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Stats;
  static deserializeBinaryFromReader(message: Stats, reader: jspb.BinaryReader): Stats;
}

export namespace Stats {
  export type AsObject = {
    userid: string,
    accuracy: number,
    correct: number,
    total: number,
    subjectaccuracyList: Array<SubjectAccuracy.AsObject>,
  }
}

export class SubjectAccuracy extends jspb.Message {
  getSubject(): string;
  setSubject(value: string): SubjectAccuracy;

  getAccuracy(): number;
  setAccuracy(value: number): SubjectAccuracy;

  getTopicaccuracyList(): Array<TopicAccuracy>;
  setTopicaccuracyList(value: Array<TopicAccuracy>): SubjectAccuracy;
  clearTopicaccuracyList(): SubjectAccuracy;
  addTopicaccuracy(value?: TopicAccuracy, index?: number): TopicAccuracy;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubjectAccuracy.AsObject;
  static toObject(includeInstance: boolean, msg: SubjectAccuracy): SubjectAccuracy.AsObject;
  static serializeBinaryToWriter(message: SubjectAccuracy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubjectAccuracy;
  static deserializeBinaryFromReader(message: SubjectAccuracy, reader: jspb.BinaryReader): SubjectAccuracy;
}

export namespace SubjectAccuracy {
  export type AsObject = {
    subject: string,
    accuracy: number,
    topicaccuracyList: Array<TopicAccuracy.AsObject>,
  }
}

export class TopicAccuracy extends jspb.Message {
  getTopic(): string;
  setTopic(value: string): TopicAccuracy;

  getAccuracy(): number;
  setAccuracy(value: number): TopicAccuracy;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TopicAccuracy.AsObject;
  static toObject(includeInstance: boolean, msg: TopicAccuracy): TopicAccuracy.AsObject;
  static serializeBinaryToWriter(message: TopicAccuracy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TopicAccuracy;
  static deserializeBinaryFromReader(message: TopicAccuracy, reader: jspb.BinaryReader): TopicAccuracy;
}

export namespace TopicAccuracy {
  export type AsObject = {
    topic: string,
    accuracy: number,
  }
}

