export interface Query {
  [key: string]: string | number;
}

export interface RequestOptions {
  query?: Query;
  id?: string | number;
}
