import { Component } from '@angular/core';
import {ListRoomsComponent} from "../../components/list-rooms/list-rooms.component";
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {CreateRoomDialogComponent} from "../../components/create-room-dialog/create-room-dialog.component";

@Component({
  selector: 'app-rooms-view',
  standalone: true,
  imports: [
    ListRoomsComponent,MatDialogModule
  ],
  templateUrl: './rooms-view.component.html',
  styleUrl: './rooms-view.component.css'
})
export class RoomsViewComponent {
  constructor(public dialog: MatDialog) {}

  openCreateRoomDialog(): void {
    this.dialog.open(CreateRoomDialogComponent);
  }
}
