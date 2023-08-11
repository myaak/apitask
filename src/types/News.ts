export interface INews {
  id: number;
  title: string;
  points?: number | null;
  user?: string | null;
  time: number;
  comments_count: number;
  url?: string;
  domain?: string;
}
