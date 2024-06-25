import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Participant} from "../models/participant.entity";
import {BaseService} from "../../shared/services/base.service";

@Injectable({
  providedIn: 'root'
})
export class ParticipantsService extends BaseService<Participant>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/participants';
  }

  //buscar participantes por id de sala
  getParticipantsByRoomId(roomId: string){
    return this._http.get<Participant[]>(`${this.resourcePath()}?room_id=${roomId}`);
  }
}
