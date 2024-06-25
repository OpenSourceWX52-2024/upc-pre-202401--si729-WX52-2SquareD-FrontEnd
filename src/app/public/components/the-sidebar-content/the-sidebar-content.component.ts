import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router, ActivatedRoute,RouterLink, RouterOutlet } from '@angular/router';
import { delay } from 'rxjs/operators';
import {} from "@angular/router";

import {TheFooterContentComponent} from "../the-footer-content/the-footer-content.component";
import {UserSharedService} from "../../../2squareD/services/user-shared.service";


@Component({
  selector: 'app-the-sidebar-content',
  standalone: true,
  imports: [
    MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule, RouterLink, RouterOutlet, TheFooterContentComponent
  ],
  templateUrl: './the-sidebar-content.component.html',
  styleUrl: './the-sidebar-content.component.css'
})
export class TheSidebarContentComponent implements OnInit{

  userId:any="1";
  userRole:any="student";

  fillerNav: any[] = [];

  readonly studentNav = [
    { name: "Inicio", path: "/home", icon: { src: "assets/icons/home-button.png", type: "custom" } },
    { name: "Juegos", path: "/games", icon: { src: "assets/icons/console.png", type: "custom" } },
    { name: "Progreso", path: "/my-progress", icon: {src: "assets/icons/check.png", type: "custom" } },
    { name: "Planes", path: "/plans", icon: { src: "assets/icons/money.png", type: "custom" } },
    { name: "Configuración", path: "/configuration", icon: { src: "assets/icons/setting.png", type: "custom" } },
    { name: "Salir", path: "/login", icon: { src: "assets/icons/logout.png", type: "custom" } }
  ];

  readonly teacherNav = [
    { name: "Inicio", path: "/home", icon: { src: "assets/icons/home-button.png", type: "custom" } },
    { name: "Salas", path: "/rooms", icon: { src: "assets/icons/room.png", type: "custom" } },
    { name: "Reportes", path: "/reports", icon: { src: "assets/icons/report.png", type: "custom" } },
    { name: "Planes", path: "/plans", icon: { src: "assets/icons/money.png", type: "custom" } },
    { name: "Configuración", path: "/configuration", icon: { src: "assets/icons/setting.png", type: "custom" } },
    { name: "Salir", path: "/login", icon: { src: "assets/icons/logout.png", type: "custom" } }
  ];


  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private router: Router, private route : ActivatedRoute,private userService: UserSharedService) {

  }

  ngOnInit() {
    this.userService.id$.subscribe(id => {
      this.userId = id;
    });

    this.userService.role$.pipe(delay(0)).subscribe(role => {
      this.userRole = role;
      console.log(this.userRole);
      switch (this.userRole) {
        case 'student':
          this.fillerNav = this.studentNav;
          break;
        case 'teacher':
          this.fillerNav = this.teacherNav;
          break;
      }
    });
  }
}
