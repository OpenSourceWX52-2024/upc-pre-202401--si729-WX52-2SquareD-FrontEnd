import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from "@angular/material/button";
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.css'
})
export class HomeViewComponent {
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']; // Ejemplo de elementos
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
  redirectToProgress() {
    this.router.navigate(['/games']);
  }

}
