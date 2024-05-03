import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {BaseService} from "../../shared/services/base.service";
import {Category} from "../models/category.entity";

@Injectable({
  providedIn: 'root'
})
export class CategoriesApiService extends BaseService<Category>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/categories';
  }

}
