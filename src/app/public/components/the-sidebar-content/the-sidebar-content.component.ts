import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

import {RouterLink, RouterOutlet, ActivatedRoute, Router} from "@angular/router";

import {TheFooterContentComponent} from "../the-footer-content/the-footer-content.component";


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

  mobileQuery: MediaQueryList;
  userRole: string = 'Student';

  userId:any="1";


  readonly fillerNav = [
    { name: "Inicio", path: "/home", icon: { src: "assets/icons/home-button.png", type: "custom" } },
    { name: "Juegos", path: "/games", icon: { src: "assets/icons/console.png", type: "custom" } },
    { name: "Progreso", path: "/my-progress", icon: {src: "assets/icons/check.png", type: "custom" } },
    { name: "Planes", path: "/plans", icon: { src: "assets/icons/money.png", type: "custom" } },
    { name: "Configuración", path: "/configuration", icon: { src: "assets/icons/setting.png", type: "custom" } },
    { name: "Salir", path: "/", icon: { src: "assets/icons/logout.png", type: "custom" } }
  ];



  private readonly _mobileQueryListener: () => void;
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private route : ActivatedRoute) {

    console.log(this.userId);
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit() {

    console.log("hopa")
    this.route.params.subscribe((params: { [key: string]: string }) => {
      const role = params['role'];
      console.log(role)
      switch (role) {
        case 'student':
          this.userRole = "student";
          break;
        case 'teacher':
          this.userRole = "teacher";
          break;
      }
    });
  }

}
