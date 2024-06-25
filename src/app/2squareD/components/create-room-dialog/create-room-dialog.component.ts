import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatOption, MatSelect} from "@angular/material/select";
import {Game} from "../../models/game.entity";
import {GamesApiService} from "../../services/games-api.service";
import {MatButton} from "@angular/material/button";
import {RoomsService} from "../../services/rooms.service";
import {Room} from "../../models/room.entity";
import {UserSharedService} from "../../services/user-shared.service";
import {RoomUpdateService} from "../../services/room-update.service";
import {MatDialogRef} from "@angular/material/dialog";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";

@Component({
  selector: 'app-create-room-dialog',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelect, MatOption, ReactiveFormsModule, MatButton],
  templateUrl: './create-room-dialog.component.html',
  styleUrl: './create-room-dialog.component.css'
})
export class CreateRoomDialogComponent implements OnInit, OnDestroy {
  form: FormGroup;
  games!: Game[];
  private unsubscribe$ = new Subject<void>();

  constructor(private gamesService: GamesApiService,
              private roomsService: RoomsService,
              private userSharedService: UserSharedService,
              private dialogRef: MatDialogRef<CreateRoomDialogComponent>,
              private roomUpdateService: RoomUpdateService) {
    this.form = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'password': new FormControl(null),
      'game': new FormControl(null, Validators.required),
      'capacity': new FormControl(null, [Validators.required, Validators.min(1), Validators.max(20)])
    });
  }

  ngOnInit() {
    this.gamesService.getAll().subscribe(games => {
      this.games = games;
      console.log(games);
    });
  }
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
  onSubmit() {
    if (this.form.valid) {
      this.userSharedService.id$.pipe(takeUntil(this.unsubscribe$)).subscribe(teacherId => {
        const gameId =  this.form.value.game;
        console.log(gameId);
        // @ts-ignore
        const newRoom = new Room("", this.form.value.name, this.form.value.password, this.form.value.capacity, parseInt(teacherId), gameId);
        this.roomsService.post(newRoom).subscribe(room => {
          console.log("se creo la sala: ", room);
          this.roomUpdateService.notifyRoomCreated();
          this.dialogRef.close();
        });
      });
    }
  }
}
