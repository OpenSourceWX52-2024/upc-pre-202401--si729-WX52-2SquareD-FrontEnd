import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {Room} from "../../models/room.entity";
import {RoomsService} from "../../services/rooms.service";
import {GamesApiService} from "../../services/games-api.service";
import {Game} from "../../models/game.entity";
import {Participant} from "../../models/participant.entity";
import {ParticipantsService} from "../../services/participants.service";

@Component({
  selector: 'app-room-card',
  standalone: true,
  imports: [MatCardModule,MatButtonModule],
  templateUrl: './room-card.component.html',
  styleUrl: './room-card.component.css'
})
export class RoomCardComponent implements OnInit{
  @Input() roomId!: string;
  room!: Room;
  game!: Game;
  participants: Participant[] = [];
  constructor(private roomsService: RoomsService,
              private gamesApiService: GamesApiService,
              private participantsService: ParticipantsService) {
  }
  ngOnInit() {
    this.loadRoomAndGame();
    this.getParticipantsByRoomId();
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

}
