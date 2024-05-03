export class GameProgress {
  id: number;
  studentId: number;
  gameId: number;
  progress: string;
  lastPlayed: Date;

  constructor(id: number, studentId: number, gameId: number, progress: string, lastPlayed: Date) {
    this.id = id;
    this.studentId = studentId;
    this.gameId = gameId;
    this.progress = progress;
    this.lastPlayed = lastPlayed;
  }
}
