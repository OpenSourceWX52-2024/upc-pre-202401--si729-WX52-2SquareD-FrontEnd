import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {BaseService} from "../../shared/services/base.service";
import {Game} from "../models/game.entity";

@Injectable({
  providedIn: 'root'
})
export class GamesApiService extends BaseService<Game>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/games';
  }

}
