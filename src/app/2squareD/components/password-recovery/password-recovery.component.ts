import {Component, OnInit} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {User} from "../../models/user.entity";
import {UsersApiService} from "../../services/users-api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-password-recovery',
  standalone: true,
  imports: [
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './password-recovery.component.html',
  styleUrl: './password-recovery.component.css'
})

export class PasswordRecoveryComponent implements OnInit {
  users: User[] = []
  email: string = '';
  newPassword: string = '';
  repeatPassword: string = '';
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

  redirectToLogin() {
    this.router.navigate(['/login']);
  }

  redirectToSignin() {
    this.router.navigate(['/sign-in']);
  }

  changePassword() {

    const user = this.users.find(user => user.email === this.email);
    if (user) {

    if (this.newPassword !== this.repeatPassword) {
      this.errorMessage = 'Las contraseñas no coinciden';
      return;
    }
    user.password = this.newPassword;

      this.usersApiService.update(user.id, user).subscribe(response => {
        if (response) {
          this.errorMessage = '';
          this.redirectToLogin();
        } else {
          this.errorMessage = 'Failed to change password';
        }
      });
  }
  else {
    this.errorMessage = 'Usuario no encontrado';
  }
  }
}

