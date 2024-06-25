import { Component } from '@angular/core';
import {ListRoomsComponent} from "../../components/list-rooms/list-rooms.component";

@Component({
  selector: 'app-game-rooms-view',
  standalone: true,
  imports: [
    ListRoomsComponent
  ],
  templateUrl: './game-rooms-view.component.html',
  styleUrl: './game-rooms-view.component.css'
})
export class GameRoomsViewComponent {

}
