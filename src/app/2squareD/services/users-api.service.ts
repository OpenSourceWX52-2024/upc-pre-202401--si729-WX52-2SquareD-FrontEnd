import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {HttpClient} from "@angular/common/http";

import {User} from "../models/user.entity";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersApiService extends BaseService<User>{

  constructor(private http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/users';
  }

}
