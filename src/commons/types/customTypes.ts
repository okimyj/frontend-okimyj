export interface IVisitBook {
  id: string;
  writer?: string;
  password?: string;
  contents?: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
}
export interface IVisitBookWriteFormData {
  writer: string;
  title: string;
  password?: string;
  contents: string;
}
