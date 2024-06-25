import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Room} from "../models/room.entity";
import {BaseService} from "../../shared/services/base.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RoomsService extends BaseService<Room>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/rooms';
  }

  getRoomsByTeacherId(teacherId: string): Observable<Room[]> {
    return this._http.get<Room[]>(`${this.resourcePath()}?teacher_id=${teacherId}`);
  }

  getRoomsByGameId(gameId: string): Observable<Room[]> {
    return this._http.get<Room[]>(`${this.resourcePath()}?game_id=${gameId}`);
  }
}
