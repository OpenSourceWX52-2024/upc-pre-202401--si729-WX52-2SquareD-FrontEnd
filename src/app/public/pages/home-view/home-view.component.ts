import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [MatCardModule, CommonModule],
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


}
