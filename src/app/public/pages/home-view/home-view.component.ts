import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.css'
})
export class HomeViewComponent {
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']; // Ejemplo de elementos
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
