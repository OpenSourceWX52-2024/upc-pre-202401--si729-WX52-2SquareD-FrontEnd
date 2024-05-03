import { Component } from '@angular/core';
import {MatFormField} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-users-login',
  standalone: true,
  imports: [
    MatFormField,
    MatInputModule,
    MatButton
  ],
  templateUrl: './users-login.component.html',
  styleUrl: './users-login.component.css'
})
export class UsersLoginComponent {

}
