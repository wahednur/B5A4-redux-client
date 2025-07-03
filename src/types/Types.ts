export type IGenre =
  | "FICTION"
  | "NON_FICTION"
  | "SCIENCE"
  | "HISTORY"
  | "BIOGRAPHY"
  | "FANTASY";
export interface IBook {
  _id: string;
  title: string;
  author: string;
  genre: IGenre;
  isbn: string;
  description?: string;
  copies: number;
  available?: boolean;
}
