import { Component, OnInit } from '@angular/core';
import { Room } from '../../models/room.entity';
import { Game } from '../../models/game.entity';
import { Participant } from '../../models/participant.entity';
import { RoomsService } from '../../services/rooms.service';
import { GamesApiService } from '../../services/games-api.service';
import { ParticipantsService } from '../../services/participants.service';

@Component({
  selector: 'app-report-view',
  templateUrl: './report-view.component.html',
  standalone: true,
  styleUrls: ['./report-view.component.css']
})
export class ReportViewComponent implements OnInit {
  rooms: Room[] = [];
  games: Game[] = [];
  participants: Participant[] = [];

  constructor(
    private roomsService: RoomsService,
    private gamesApiService: GamesApiService,
    private participantsService: ParticipantsService
  ) {}

  ngOnInit() {
    this.loadRoomsAndGames();
  }

  loadRoomsAndGames() {
    this.roomsService.getAll().subscribe(rooms => {
      this.rooms = rooms;
      this.rooms.forEach(room => {
        this.gamesApiService.getOne(room.game_id).subscribe(game => {
          this.games.push(game);
        });
        this.participantsService.getParticipantsByRoomId(room.id.toString()).subscribe(participants => {
          this.participants.push(...participants);
        });
      });
    });
  }
}
