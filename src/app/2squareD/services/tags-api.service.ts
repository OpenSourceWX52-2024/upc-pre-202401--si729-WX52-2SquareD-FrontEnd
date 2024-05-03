import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {BaseService} from "../../shared/services/base.service";
import {Tag} from "../models/tag.entity";

@Injectable({
  providedIn: 'root'
})
export class TagsApiService extends BaseService<Tag>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/tags';
  }

}
