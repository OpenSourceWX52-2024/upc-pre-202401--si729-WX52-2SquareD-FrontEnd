import {Component, OnDestroy, OnInit} from '@angular/core';
import {RoomCardComponent} from "../room-card/room-card.component";
import {Room} from "../../models/room.entity";
import {RoomsService} from "../../services/rooms.service";
import {UserSharedService} from "../../services/user-shared.service";
import {RoomUpdateService} from "../../services/room-update.service";
import {take, takeUntil} from 'rxjs/operators';
import {Subject} from "rxjs";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-rooms',
  standalone: true,
  imports: [
    RoomCardComponent
  ],
  templateUrl: './list-rooms.component.html',
  styleUrl: './list-rooms.component.css'
})
export class ListRoomsComponent implements OnInit, OnDestroy{
  rooms!: Room[];
  role!: string;
  private unsubscribe$ = new Subject<void>();

  constructor(private roomsService: RoomsService,
              private userSharedService: UserSharedService,
              private roomUpdateService: RoomUpdateService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.role = params['role'];
      console.log('role:', this.role);
      if (this.role === 'teacher') {
        this.getRoomsByTeacherId();
      } else if (this.role === 'student') {
        this.getRoomsByGameId();
      }
    });

    this.roomUpdateService.roomCreated.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
      if (this.role === 'teacher') {
        this.getRoomsByTeacherId();
      } else if (this.role === 'student') {
        this.getRoomsByGameId();
      }
    });
  }
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
  getRoomsByGameId() {
    this.route.params.pipe(take(1)).subscribe(params => {
      const gameId = params['gameid'];
      console.log('gameId:', gameId);
      this.roomsService.getRoomsByGameId(gameId).subscribe(rooms => {
        this.rooms = rooms;
        console.log('rooms:', this.rooms);
      });
    });
  }
  getRoomsByTeacherId() {
    this.userSharedService.id$.pipe(take(1)).subscribe(teacherId => {
      console.log('teacherId:', teacherId);
      this.roomsService.getRoomsByTeacherId(teacherId).subscribe(rooms => {
        this.rooms = rooms;
        console.log('rooms:', this.rooms);
      });
    });
  }
}
