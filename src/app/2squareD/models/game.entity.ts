export class Game {
  id: number;
  title: string;
  description: string;
  tag: string;
  total_score: number;
  constructor(id: number, title: string, description: string, tag: string, total_score: number) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.tag = tag;
    this.total_score = total_score;
  }
}
