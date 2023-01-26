export enum Size {
  md,
  lg,
}

export interface Post {
  title: string;
  slug?: string;
  date: string;
  description: string;
  path: string;
  body?: { raw: string; code: string };
}
