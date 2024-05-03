import {AfterContentInit, Component, OnInit} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {UsersApiService} from "../../services/users-api.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-users-sign-in',
  standalone: true,
    imports: [
        MatButton,
        MatFormField,
        MatInput,
        MatLabel
    ],
  templateUrl: './users-sign-in.component.html',
  styleUrl: './users-sign-in.component.css'

})

export class UsersSignInComponent {


  constructor(private router: Router) {

  }
  redirectToLogin() {
    this.router.navigate(['/login']);
  }
}
