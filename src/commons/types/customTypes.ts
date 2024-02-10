import { DocumentData } from "firebase/firestore";
export interface ICustomDocumentData extends DocumentData {
  id: string;
}
export interface IVisitorBook extends ICustomDocumentData {
  writer?: string;
  password?: string;
  contents?: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
}
export interface IVisitorBookWriteFormData {
  writer: string;
  password?: string;
  contents: string;
}
