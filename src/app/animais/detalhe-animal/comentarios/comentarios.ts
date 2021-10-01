export interface Comentario {
  date: Date;
  text: string;
  userName: string;
  fullName: string;
}

export type Comentarios = Array<Comentario>;
