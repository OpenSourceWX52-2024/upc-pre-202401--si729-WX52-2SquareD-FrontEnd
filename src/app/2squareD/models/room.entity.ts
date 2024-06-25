export class Room{
  id: string;
  title: string;
  password: string;
  capacity: number;
  teacher_id: number;
  game_id: number;
  state: string;

  constructor(id: string, title: string, password: string="", capacity: number, teacher_id: number, game_id: number, state: string="waiting") {
    this.id = id;
    this.title = title;
    this.password = password;
    this.capacity = capacity;
    this.teacher_id = teacher_id;
    this.game_id = game_id;
    this.state = state;
  }
}
