import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RouterLink, RouterOutlet} from "@angular/router";
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
export class TheSidebarContentComponent {
  mobileQuery: MediaQueryList;

  fillerNav = [{name:"Inicio",path:"/home"}, {name:"Progreso",path:"/games"},{name:"Configuración",path:"/configuration"},{name:"Planes", path:"/plans"}];

  fillerContent = Array.from(
    {length: 50},
    () =>
      `hola`,
  );

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
