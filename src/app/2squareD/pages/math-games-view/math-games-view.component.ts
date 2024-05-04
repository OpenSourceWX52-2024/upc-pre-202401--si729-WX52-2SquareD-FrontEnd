import { Component } from '@angular/core';
import {MatProgressBar} from "@angular/material/progress-bar";

@Component({
  selector: 'app-math-games-view',
  standalone: true,
  imports: [
    MatProgressBar
  ],
  templateUrl: './math-games-view.component.html',
  styleUrl: './math-games-view.component.css'
})
export class MathGamesViewComponent {

}
