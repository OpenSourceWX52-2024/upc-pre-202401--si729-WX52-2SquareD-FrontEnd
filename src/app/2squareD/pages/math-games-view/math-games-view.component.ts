import { Component } from '@angular/core';
import {MatProgressBar} from "@angular/material/progress-bar";
import {Router} from "@angular/router";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-math-games-view',
  standalone: true,
  imports: [
    MatProgressBar,
    MatButton
  ],
  templateUrl: './math-games-view.component.html',
  styleUrl: './math-games-view.component.css'
})
export class MathGamesViewComponent {
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

  redirectToSubjects(){
    this.router.navigate(['page-not-found']);
  }
  redirectToMode(){
    this.router.navigate(['page-not-found']);
  }
  redirectToType(){
    this.router.navigate(['page-not-found']);
  }
}
