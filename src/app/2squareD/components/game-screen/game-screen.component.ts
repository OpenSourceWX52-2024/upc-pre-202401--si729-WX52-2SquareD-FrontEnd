import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-game-screen',
  standalone: true,
  imports: [],
  templateUrl: './game-screen.component.html',
  styleUrl: './game-screen.component.css'
})
export class GameScreenComponent implements OnInit {
  imageSrc: string= '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("hopa")
    this.route.params.subscribe(params => {
      const id = params['id'];
      console.log(id)
      console.log("hopa")
      switch (id) {
        case '1':
          this.imageSrc = 'assets/game-screen1.png';
          break;
        case '2':
          this.imageSrc = 'assets/game-screen2.png';
          break;
        case '3':
          this.imageSrc = 'assets/game-screen3.png';
          break;
        default:
          this.imageSrc = 'assets/game-screen1.png';
      }
    });
  }
}
