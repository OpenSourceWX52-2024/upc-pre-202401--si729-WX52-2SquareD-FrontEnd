import {Component, OnInit} from '@angular/core';
import { MatCardModule} from "@angular/material/card";
import { MatButtonModule} from "@angular/material/button";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {MatChip} from "@angular/material/chips";

@Component({
  selector: 'app-game-overview',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    RouterLink,
    MatChip
  ],
  templateUrl: './game-overview.component.html',
  styleUrl: './game-overview.component.css'
})
export class GameOverviewComponent implements OnInit {
  imageSrc: string= '';
  title: string = '';
  description: string = '';
  content: string = '';
  buttonText: string = '';
  tag1: string = '';
  tag2: string = '';
  tag3: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("hopa")
    this.route.params.subscribe(params => {
      const id = params['id'];
      console.log(id)
      console.log("hopa")
      switch (id) {
        case '1':
          this.imageSrc = 'assets/game-1-original.png';
          this.title = 'FracPizza';
          this.tag1 = 'Fracciones';
          this.tag2 = 'Gratuito';
          this.tag3 = 'Monojugador';
          this.description = 'Descripción';
          this.content = '"Bienvenido a \'FracPizza\', el juego donde puedes aprender sobre fracciones de una manera deliciosa. Únete a nuestro chef pizzero en la cocina y aprende a dividir pizzas en fracciones mientras preparas las pizzas más deliciosas. Desde medias pizzas hasta octavos, este juego te enseñará todo sobre fracciones de una manera divertida y sabrosa. ¡Prepárate para una experiencia de aprendizaje que te dejará con ganas de más!"';
          this.buttonText = 'Jugar';
          break;
        case '2':
          this.imageSrc = 'assets/game-2-oficial.png';
          this.title = 'Cálculo Mental';
          this.tag1 = 'Cálculo';
          this.tag2 = 'Gratuito';
          this.tag3 = 'Monojugador';
          this.description = 'Descripción';
          this.content = '"¡Bienvenido a \'Calculo Mental\'! El juego donde sumar, restar, multiplicar y dividir nunca ha sido tan emocionante. Únete a nuestros intrépidos personajes en su misión por resolver problemas matemáticos en tiempo récord y salvar la tierra de los errores aritméticos. ¡Demuestra que eres el maestro del cálculo y diviértete mientras desafías tu mente con desafíos numéricos! Calculatopia: donde hasta las ecuaciones más complejas se convierten en diversión desenfrenada."';
          this.buttonText = 'Jugar';
          break;
        case '3':
          this.imageSrc = 'assets/game-screen1.png';
          this.title = 'Versusmatic';
          this.tag1 = 'Ecuaciones';
          this.tag2 = 'Premium';
          this.tag3 = 'Multijugador';
          this.description = 'Descripción';
          this.content = '"¡Bienvenido a \'Versusmatic\', donde los números se convierten en poderosos aliados en batallas épicas! En este emocionante juego multijugador, podrás entrenar a tus MathMons, criaturas mágicas que representan diferentes conceptos matemáticos, como sumas, restas, multiplicaciones y divisiones. Desafía a otros jugadores a duelos donde el conocimiento matemático y la estrategia son clave para la victoria. ¡Conviértete en el Maestro MathMon y demuestra que eres el mejor en batallas donde la mente es tu mayor arma!"';
          this.buttonText = 'Jugar';
          break;
        default:
          this.imageSrc = 'assets/game-screen1.png';
      }
    });
  }

}
