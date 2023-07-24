interface INews {
  id: number;
  title: string;
  points?: number | null;
  user?: string | null;
  time: number;
  time_ago: string;
  comments_count: number;
  type: string;
  url?: string;
  domain?: string;
}

class News {
  id: number;
  title: string;
  points?: number | null;
  user?: string | null;
  time: number;
  comments_count: number;
  url?: string;
  domain?: string;

  constructor({ id, title, points, user, time, comments_count, url, domain }: INews) {
    this.id = id;
    this.title = title;
    this.points = points;
    this.user = user;
    this.time = time;
    this.comments_count = comments_count;
    this.url = url;
    this.domain = domain;
  }
}

export type NewsInstance = InstanceType<typeof News>
