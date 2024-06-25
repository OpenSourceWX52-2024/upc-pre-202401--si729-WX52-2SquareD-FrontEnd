import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {Room} from "../../models/room.entity";
import {RoomsService} from "../../services/rooms.service";
import {GamesApiService} from "../../services/games-api.service";
import {Game} from "../../models/game.entity";
import {Participant} from "../../models/participant.entity";
import {ParticipantsService} from "../../services/participants.service";
import {DetailRoomDialogComponent} from "../detail-room-dialog/detail-room-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {ActivatedRoute} from "@angular/router";
import {StudentsApiService} from "../../services/students-api.service";

@Component({
  selector: 'app-room-card',
  standalone: true,
  imports: [MatCardModule,MatButtonModule],
  templateUrl: './room-card.component.html',
  styleUrl: './room-card.component.css'
})
export class RoomCardComponent implements OnInit{
  @Input() roomId!: string;
  @Input() role!: string;
  room!: Room;
  game!: Game;
  participants: Participant[] = [];
  constructor(private roomsService: RoomsService,
              private gamesApiService: GamesApiService,
              private participantsService: ParticipantsService,
              private studentsService: StudentsApiService,
              public dialog: MatDialog,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.loadRoomAndGame();
    this.getParticipantsByRoomId();
  }

  joinRoom() {
    const userId = this.route.snapshot.paramMap.get('id');
    if (userId) {
      this.studentsService.getByUserId(userId).subscribe(response => {
        // @ts-ignore
        const student = response[0]; // If the response is an array, get the first element
        console.log('student:', student);
        if (student) {
          const participant = new Participant(0, student.id, this.room.id);
          console.log('participant:', participant);
          this.participantsService.post(participant).subscribe(newParticipant => {
            console.log('New participant:', newParticipant);
            this.participants.push(newParticipant);
          });
        }
      });
    }
  }

  getParticipantsByRoomId() {
    if (this.roomId) {
      this.participantsService.getParticipantsByRoomId(this.roomId).subscribe(participants => {
        this.participants = participants;
        console.log('participants:', this.participants);
      });
    }
  }
  loadRoomAndGame() {
    if (this.roomId) {
      console.log('roomId:', this.roomId);
      this.roomsService.getOne(parseInt(this.roomId)).subscribe(room => {
        this.room = room;
        console.log('room:', this.room);
        this.gamesApiService.getOne(this.room.game_id).subscribe(game => {
          this.game = game;
          console.log('game:', this.game);
        });
      });
    }
  }
  openDetailRoomDialog() {
    const dialogRef = this.dialog.open(DetailRoomDialogComponent, {
      data: { room: this.room, game: this.game, participants: this.participants }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
