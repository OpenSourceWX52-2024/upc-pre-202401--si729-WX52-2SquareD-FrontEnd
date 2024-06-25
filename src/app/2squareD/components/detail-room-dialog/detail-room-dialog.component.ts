import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Participant } from "../../models/participant.entity";
import {Student} from "../../models/student.entity";
import {StudentsApiService} from "../../services/students-api.service";
import { User } from "../../models/user.entity";
import {UsersApiService} from "../../services/users-api.service";
import {Game} from "../../models/game.entity";
import {Room} from "../../models/room.entity";
import {RoomsService} from "../../services/rooms.service";

@Component({
  selector: 'app-detail-room-dialog',
  standalone: true,
  imports: [],
  templateUrl: './detail-room-dialog.component.html',
  styleUrl: './detail-room-dialog.component.css'
})
export class DetailRoomDialogComponent implements OnInit {
  participants: Participant[] = [];
  users: User[] = [];
  room!: Room;
  game!: Game;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private userService: UsersApiService,
              private studentsService: StudentsApiService,
              private roomsService: RoomsService) {
    this.participants = data.participants;
    this.room = data.room;
    this.game = data.game;
  }

  ngOnInit() {
    this.loadUsers();
  }

  changeGameState() {
    this.room.state = 'in game';
    this.roomsService.update(this.room.id,this.room).subscribe(updatedRoom => {
      this.room = updatedRoom;
    });
  }

  loadUsers() {
    console.log('participants:', this.participants);
    this.participants.forEach(participant => {
      this.studentsService.getOne(participant.student_id).subscribe(student => {
        console.log('student:', student);
        this.userService.getOne(student.user_id).subscribe(user => {
          console.log('user:', user);
          this.users.push(user);
        });
      });
    });
  }
}
