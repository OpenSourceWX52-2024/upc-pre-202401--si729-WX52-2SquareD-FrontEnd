export class Category {
  id: number;
  gameId: number;
  name: string;

  constructor(id: number, gameId: number, name: string) {
    this.id = id;
    this.gameId = gameId;
    this.name = name;
  }
}
