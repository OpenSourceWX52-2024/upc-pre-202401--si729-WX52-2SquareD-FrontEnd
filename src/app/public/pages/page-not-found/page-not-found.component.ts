import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import { ActivatedRoute } from '@angular/router';

import { MatButtonModule } from "@angular/material/button";
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [
    RouterLink,

    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent {
  origin: string;
  notFoundUrl: string;

  constructor(private _route: ActivatedRoute) {
    this.origin = window.location.origin;
    this.notFoundUrl = this.origin + '/' + this._route.snapshot.url.join('');
  }
}
