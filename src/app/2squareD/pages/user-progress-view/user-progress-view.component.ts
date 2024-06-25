import {Component, OnInit} from '@angular/core';
import {MatProgressBar} from "@angular/material/progress-bar";
import {Router} from "@angular/router";
import {ActivatedRoute} from "@angular/router";
import {CommonModule} from "@angular/common";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-user-progress-view',
  standalone: true,
  imports: [
    MatProgressBar,
    CommonModule,
    NgOptimizedImage,
  ],
  templateUrl: './user-progress-view.component.html',
  styleUrl: './user-progress-view.component.css'
})

export class UserProgressViewComponent implements OnInit{
  userRole: string = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  redirectToMathGamePizza() {
    this.router.navigate(['game/overview/1']).then(success => {
    if (success) {
      console.log('Navigation succeeded');
    } else {
      console.log('Navigation failed');
    }
  });
  }

  redirectToMathCalculoMental() {
    this.router.navigate(['game/overview/2']).then(success => {
      if (success) {
        console.log('Navigation succeeded');
      } else {
        console.log('Navigation failed');
      }
    });
  }
  redirectToMathVersusmatic() {
    this.router.navigate(['game/overview/3']).then(success => {
      if (success) {
        console.log('Navigation succeeded');
      } else {
        console.log('Navigation failed');
      }
    });
  }
  ngOnInit() {
  this.activatedRoute.params.subscribe(params => {
    const role = params['role'];
    switch (role) {
      case 'student':
        this.userRole = "student";
        break;
      case 'teacher':
        this.userRole = "teacher";
        break;
    }
  });
}
}
