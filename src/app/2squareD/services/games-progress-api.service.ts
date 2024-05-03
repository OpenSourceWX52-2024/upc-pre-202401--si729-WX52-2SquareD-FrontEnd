import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {BaseService} from "../../shared/services/base.service";
import {GameProgress} from "../models/game-progress.entity";

@Injectable({
  providedIn: 'root'
})
export class GamesProgressApiService extends BaseService<GameProgress>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/gameProgress'; // REVISAR SI ASI CREAR EL ENDPOINT EL json-server o lo crea como game-progress con guion
  }

}
