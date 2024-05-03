import { User } from './user.entity';

export class Teacher {
  id: number;
  userId: number;
  user?: User;

  constructor(id: number, userId: number, user?: User) {
    this.id = id;
    this.userId = userId;
    this.user = user;
  }
}
