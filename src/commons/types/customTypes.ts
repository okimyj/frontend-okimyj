export interface IVisitorBook {
  id: string;
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
