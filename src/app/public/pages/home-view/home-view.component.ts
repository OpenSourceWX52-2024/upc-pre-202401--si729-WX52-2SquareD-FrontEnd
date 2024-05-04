import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import { Router } from '@angular/router';



@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.css'
})
export class HomeViewComponent {
  items = [
    { src: 'assets/game-screen1.png' },
    { src: 'assets/game-screen1.png' },
    { src: 'assets/game-screen1.png' },
    { src: 'assets/game-screen1.png' },
    { src: 'assets/game-screen1.png' },
  ];
  currentIndex = 0;

  constructor(private router: Router) {
  }
  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  next() {
    if (this.currentIndex < this.items.length - 3) {
      this.currentIndex++;
    }
  }
  redirectToPremium() {
    this.router.navigate(['/plans']);
  }

}
