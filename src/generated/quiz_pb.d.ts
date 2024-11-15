import * as jspb from 'google-protobuf'



export class Question extends jspb.Message {
  getQuestion(): string;
  setQuestion(value: string): Question;

  getOptionsList(): Array<string>;
  setOptionsList(value: Array<string>): Question;
  clearOptionsList(): Question;
  addOptions(value: string, index?: number): Question;

  getAnswer(): string;
  setAnswer(value: string): Question;

  getExplanation(): string;
  setExplanation(value: string): Question;

  getSubject(): string;
  setSubject(value: string): Question;

  getTopic(): string;
  setTopic(value: string): Question;

  getTenant(): string;
  setTenant(value: string): Question;

  getDifficulty(): string;
  setDifficulty(value: string): Question;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Question.AsObject;
  static toObject(includeInstance: boolean, msg: Question): Question.AsObject;
  static serializeBinaryToWriter(message: Question, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Question;
  static deserializeBinaryFromReader(message: Question, reader: jspb.BinaryReader): Question;
}

export namespace Question {
  export type AsObject = {
    question: string,
    optionsList: Array<string>,
    answer: string,
    explanation: string,
    subject: string,
    topic: string,
    tenant: string,
    difficulty: string,
  }
}

export class Subject extends jspb.Message {
  getName(): string;
  setName(value: string): Subject;

  getTopicsList(): Array<Topic>;
  setTopicsList(value: Array<Topic>): Subject;
  clearTopicsList(): Subject;
  addTopics(value?: Topic, index?: number): Topic;

  getTenant(): string;
  setTenant(value: string): Subject;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Subject.AsObject;
  static toObject(includeInstance: boolean, msg: Subject): Subject.AsObject;
  static serializeBinaryToWriter(message: Subject, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Subject;
  static deserializeBinaryFromReader(message: Subject, reader: jspb.BinaryReader): Subject;
}

export namespace Subject {
  export type AsObject = {
    name: string,
    topicsList: Array<Topic.AsObject>,
    tenant: string,
  }
}

export class Topic extends jspb.Message {
  getName(): string;
  setName(value: string): Topic;

  getDesc(): string;
  setDesc(value: string): Topic;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Topic.AsObject;
  static toObject(includeInstance: boolean, msg: Topic): Topic.AsObject;
  static serializeBinaryToWriter(message: Topic, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Topic;
  static deserializeBinaryFromReader(message: Topic, reader: jspb.BinaryReader): Topic;
}

export namespace Topic {
  export type AsObject = {
    name: string,
    desc: string,
  }
}

export class SubjectList extends jspb.Message {
  getSubjectsList(): Array<Subject>;
  setSubjectsList(value: Array<Subject>): SubjectList;
  clearSubjectsList(): SubjectList;
  addSubjects(value?: Subject, index?: number): Subject;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubjectList.AsObject;
  static toObject(includeInstance: boolean, msg: SubjectList): SubjectList.AsObject;
  static serializeBinaryToWriter(message: SubjectList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubjectList;
  static deserializeBinaryFromReader(message: SubjectList, reader: jspb.BinaryReader): SubjectList;
}

export namespace SubjectList {
  export type AsObject = {
    subjectsList: Array<Subject.AsObject>,
  }
}

export class TenantRequest extends jspb.Message {
  getTenant(): string;
  setTenant(value: string): TenantRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TenantRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TenantRequest): TenantRequest.AsObject;
  static serializeBinaryToWriter(message: TenantRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TenantRequest;
  static deserializeBinaryFromReader(message: TenantRequest, reader: jspb.BinaryReader): TenantRequest;
}

export namespace TenantRequest {
  export type AsObject = {
    tenant: string,
  }
}

export class ContestRequest extends jspb.Message {
  getTenant(): string;
  setTenant(value: string): ContestRequest;

  getSubject(): string;
  setSubject(value: string): ContestRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContestRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ContestRequest): ContestRequest.AsObject;
  static serializeBinaryToWriter(message: ContestRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContestRequest;
  static deserializeBinaryFromReader(message: ContestRequest, reader: jspb.BinaryReader): ContestRequest;
}

export namespace ContestRequest {
  export type AsObject = {
    tenant: string,
    subject: string,
  }
}

export class Contest extends jspb.Message {
  getQuestionsList(): Array<QuizQuestion>;
  setQuestionsList(value: Array<QuizQuestion>): Contest;
  clearQuestionsList(): Contest;
  addQuestions(value?: QuizQuestion, index?: number): QuizQuestion;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Contest.AsObject;
  static toObject(includeInstance: boolean, msg: Contest): Contest.AsObject;
  static serializeBinaryToWriter(message: Contest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Contest;
  static deserializeBinaryFromReader(message: Contest, reader: jspb.BinaryReader): Contest;
}

export namespace Contest {
  export type AsObject = {
    questionsList: Array<QuizQuestion.AsObject>,
  }
}

export class QuizQuestion extends jspb.Message {
  getQuestion(): string;
  setQuestion(value: string): QuizQuestion;

  getOptionsList(): Array<string>;
  setOptionsList(value: Array<string>): QuizQuestion;
  clearOptionsList(): QuizQuestion;
  addOptions(value: string, index?: number): QuizQuestion;

  getQhash(): string;
  setQhash(value: string): QuizQuestion;

  getSubject(): string;
  setSubject(value: string): QuizQuestion;

  getTopic(): string;
  setTopic(value: string): QuizQuestion;

  getTenant(): string;
  setTenant(value: string): QuizQuestion;

  getDifficulty(): string;
  setDifficulty(value: string): QuizQuestion;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuizQuestion.AsObject;
  static toObject(includeInstance: boolean, msg: QuizQuestion): QuizQuestion.AsObject;
  static serializeBinaryToWriter(message: QuizQuestion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuizQuestion;
  static deserializeBinaryFromReader(message: QuizQuestion, reader: jspb.BinaryReader): QuizQuestion;
}

export namespace QuizQuestion {
  export type AsObject = {
    question: string,
    optionsList: Array<string>,
    qhash: string,
    subject: string,
    topic: string,
    tenant: string,
    difficulty: string,
  }
}

export class CandidateResponse extends jspb.Message {
  getQuestionhash(): string;
  setQuestionhash(value: string): CandidateResponse;

  getAnswer(): string;
  setAnswer(value: string): CandidateResponse;

  getTenant(): string;
  setTenant(value: string): CandidateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CandidateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CandidateResponse): CandidateResponse.AsObject;
  static serializeBinaryToWriter(message: CandidateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CandidateResponse;
  static deserializeBinaryFromReader(message: CandidateResponse, reader: jspb.BinaryReader): CandidateResponse;
}

export namespace CandidateResponse {
  export type AsObject = {
    questionhash: string,
    answer: string,
    tenant: string,
  }
}

export class SubmissionResponse extends jspb.Message {
  getIscorrect(): boolean;
  setIscorrect(value: boolean): SubmissionResponse;

  getExplanation(): string;
  setExplanation(value: string): SubmissionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubmissionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SubmissionResponse): SubmissionResponse.AsObject;
  static serializeBinaryToWriter(message: SubmissionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubmissionResponse;
  static deserializeBinaryFromReader(message: SubmissionResponse, reader: jspb.BinaryReader): SubmissionResponse;
}

export namespace SubmissionResponse {
  export type AsObject = {
    iscorrect: boolean,
    explanation: string,
  }
}

