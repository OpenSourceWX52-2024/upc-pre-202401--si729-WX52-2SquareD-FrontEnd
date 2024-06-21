import {AfterContentInit, Component, OnInit} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {UsersApiService} from "../../services/users-api.service";
import {User} from "../../models/user.entity";
import { Router } from '@angular/router';
import {FormsModule} from "@angular/forms";
@Component({
  selector: 'app-users-sign-in',
  standalone: true,
  imports: [
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    FormsModule
  ],
  templateUrl: './users-sign-in.component.html',
  styleUrl: './users-sign-in.component.css'

})

export class UsersSignInComponent {

  userData: User={
    id:"",
    username:"",
    fullname:"",
    email:"",
    password:"",
  };
  newId:string=""
  constructor(private router: Router,private usersService: UsersApiService) {
    this.userData = {} as User;
  }
  redirectToLogin() {
    this.router.navigate(['/login']);
  }

  registerUser() {
    this.newId="0"
    this.usersService.getAll().subscribe((response:User[]) => {
      console.log(response.length +1);
      this.newId = (response.length +1).toString();
      console.log(this.newId)
      const newUser = new User(this.newId, this.userData.username, "Joe Jota", this.userData.email, this.userData.password);

      this.createUser(newUser);
    })
  }

  private createUser(user: User) {
    this.usersService.post(user).subscribe((response: any) => {
      console.log(response);
      this.redirectToLogin()
      });
  };
}
