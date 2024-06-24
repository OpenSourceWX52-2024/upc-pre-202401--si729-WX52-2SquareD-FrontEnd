import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

import {RouterLink, RouterOutlet, ActivatedRoute } from "@angular/router";

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

  userId:any="1";


readonly fillerNav = [
  {name:"Inicio",path:"/home"},
  {name:"Juegos",path:"/games"},
  {name:"Progreso",path:"/my-progress"},
  {name:"Planes", path:"/plans"},
  {name:"Configuración",path:"/configuration"}
];

  private readonly _mobileQueryListener: () => void;
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private activatedRoute : ActivatedRoute) {

    console.log(this.userId);
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  /**ngOnDestroy(): void {
   this.mobileQuery.removeListener(this._mobileQueryListener);
   }*/

  ngOnInit() {
  this.activatedRoute.params.subscribe(params => {
    this.userId = params['id']; // assuming 'id' is a parameter in your route
  });
  }

}
