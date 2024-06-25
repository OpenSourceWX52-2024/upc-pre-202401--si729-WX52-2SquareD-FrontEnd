import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {TheSidebarContentComponent} from "./public/components/the-sidebar-content/the-sidebar-content.component";
import {TheFooterContentComponent} from "./public/components/the-footer-content/the-footer-content.component";


@Component({
  selector: 'app-root',
  standalone: true,

  imports: [CommonModule, RouterOutlet, TheSidebarContentComponent, TheFooterContentComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = '2Square-Frontend';
  showSidebar: boolean = false;
  load:any =null
  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // @ts-ignore
        this.showSidebar = event.url !== '/login' && event.url !== '/sign-in'&& event.url !== '/password-recovery' && event.url !== '/' && event.url !== '/1';
        if (this.showSidebar) {
          this.load=1;
        }else {
          this.load=0;
        }
      }
    });
  }
  constructor(private router: Router) {

  }
}
