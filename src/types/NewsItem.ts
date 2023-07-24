export interface INewsItem {
  id: number;
  title: string;
  points: number | null;
  user: string | null;
  time: number;
  time_ago: string;
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

class NewsItem {
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

  constructor({
    id,
    title,
    points,
    user,
    time,
    content,
    deleted,
    dead,
    type,
    url,
    domain,
    comments,
    level,
    comments_count
  }: INewsItem) {
    this.id = id;
    this.title = title;
    this.points = points;
    this.user = user;
    this.time = time;
    this.content = content;
    this.deleted = deleted;
    this.dead = dead;
    this.type = type;
    this.url = url;
    this.domain = domain;
    this.comments = comments;
    this.level = level;
    this.comments_count = comments_count;
  }
}

export type NewsItemInstance = InstanceType<typeof NewsItem>;
