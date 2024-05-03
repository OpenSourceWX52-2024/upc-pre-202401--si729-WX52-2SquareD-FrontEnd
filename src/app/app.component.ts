import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {TheSidebarContentComponent} from "./public/components/the-sidebar-content/the-sidebar-content.component";

import {UsersSignInComponent} from "./2squareD/components/users-sign-in/users-sign-in.component";


@Component({
  selector: 'app-root',
  standalone: true,

  imports: [CommonModule, RouterOutlet, UsersSignInComponent,TheSidebarContentComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '2Square-Frontend';
  showSidebar: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // @ts-ignore
        this.showSidebar = event.url !== '/login' && event.url !== '/sign-in';
      }
    });
  }
}
