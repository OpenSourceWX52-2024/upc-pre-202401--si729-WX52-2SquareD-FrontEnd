import {Component, OnInit} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {Router, RouterLink} from '@angular/router';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule, RouterLink],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.css'
})
export class HomeViewComponent implements OnInit{
  items = [
    { src: 'assets/game-screen1.png' },
    { src: 'assets/game-screen1.png' },
    { src: 'assets/game-screen1.png' },
    { src: 'assets/game-screen1.png' },
    { src: 'assets/game-screen1.png' },
  ];
  text: string = '';
  text1: string = '';
  text2: string = '';
  currentIndex = 0;

  constructor(private router: Router, private route: ActivatedRoute) {
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
    this.router.navigate(['/plans/:id']);
  }
  redirectToProgress() {
    this.router.navigate(['my-progress/:id']).then(success => {
      if (success) {
        console.log('Navigation succeeded');
      } else {
        console.log('Navigation failed');
      }
    })
  }

  ngOnInit() {
    console.log("hopa")
    this.route.params.subscribe((params: {[key: string]: string}) => {
      const id = params['id'];
      const role = params['role'];
    console.log(role)
      switch (role) {
      case 'student':
        this.text = '¡Mira cuanto has'
        this.text1= 'mejorado desde que';
        this.text2 = 'llegaste aquí!';
        break;
      case 'teacher':
        this.text = '¡Mira cuanto han'
        this.text1= 'mejorado tus estudiantes';
        this.text2 = 'desde que llegaron aquí!';
        break;
      }
    });
  }

}
