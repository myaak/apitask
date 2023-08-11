export interface INewsItem {
  id: number;
  title: string;
  points: number | null;
  user: string | null;
  time: number;
  content: string;
  deleted?: boolean;
  dead?: boolean;
  type: string;
  url?: string;
  domain?: string;
  comments: INewsItem[]; // Comments are items too
  level: number;
  comments_count: number;
}
