import {Component, OnInit} from '@angular/core';
import {MatFormField} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {Router} from "@angular/router";
import {User} from "../../models/user.entity";
import {UsersApiService} from "../../services/users-api.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-users-login',
  standalone: true,
  imports: [
    MatFormField,
    MatInputModule,
    MatButton,
    FormsModule
  ],
  templateUrl: './users-login.component.html',
  styleUrl: './users-login.component.css'
})
export class UsersLoginComponent implements OnInit {
  users:User[] =[]
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  ngOnInit() {
    this.getAllUsers();

  }
  private getAllUsers(){
    this.usersApiService.getAll().subscribe((response:User[]) => {
      this.users = response;
      console.log(this.users)
    })
  }
  constructor(private router: Router, private usersApiService: UsersApiService) {

  }

  redirectToSignin() {
    this.router.navigate(['/sign-in']);
  }

  loginUser() {
    const user = this.users.find(user => user.email === this.email);
    if (user) {
      if (user.password === this.password) {
        this.router.navigate(['/home',user.id,user.role]);
      } else {
        this.errorMessage = 'Contraseña incorrecta';
      }
    } else {
      this.errorMessage = 'Usuario no encontrado';
    }
  }
}
