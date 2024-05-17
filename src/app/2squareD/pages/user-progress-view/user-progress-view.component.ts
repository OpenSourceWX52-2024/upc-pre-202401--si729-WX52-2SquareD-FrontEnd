import { Component } from '@angular/core';
import {MatProgressBar} from "@angular/material/progress-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-progress-view',
  standalone: true,
  imports: [
    MatProgressBar
  ],
  templateUrl: './user-progress-view.component.html',
  styleUrl: './user-progress-view.component.css'
})
export class UserProgressViewComponent {
  constructor(private router: Router) {
  }

  redirectToMathGamePizza() {
    this.router.navigate(['game/overview/1']);
  }

  redirectToMathCalculoMental() {
    this.router.navigate(['game/overview/2']);
  }
  redirectToMathVersusmatic() {
    this.router.navigate(['game/overview/3']);
  }
}
