export class Game {
  id: number;
  studentsIds: number[];
  tagsIds: number[];
  name: string;
  description: string;

  constructor(id: number, studentsIds: number[], tagsIds: number[], name: string, description: string) {
    this.id = id;
    this.studentsIds = studentsIds;
    this.tagsIds = tagsIds;
    this.name = name;
    this.description = description;
  }
}
