export class Participant{
  id: number;
  student_id: string;
  room_id: string;

  constructor(id: number, student_id: string, room_id: string){
    this.id = id;
    this.student_id = student_id;
    this.room_id = room_id;
  }
}
