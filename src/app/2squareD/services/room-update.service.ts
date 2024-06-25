import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RoomUpdateService {
  roomCreated = new Subject<void>();

  notifyRoomCreated() {
    this.roomCreated.next();
  }
}
