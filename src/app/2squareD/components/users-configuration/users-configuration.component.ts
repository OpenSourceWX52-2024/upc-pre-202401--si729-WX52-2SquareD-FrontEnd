import {Component, OnInit} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {User} from "../../models/user.entity";
import {ActivatedRoute} from "@angular/router";
import {FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';
import {UsersApiService} from "../../services/users-api.service";

@Component({
  selector: 'app-users-configuration',
  standalone: true,
  imports: [
    MatCardModule,
    MatButton,
    MatGridListModule,
    MatFormField,
    MatInput,
    ReactiveFormsModule
  ],
  templateUrl: './users-configuration.component.html',
  styleUrl: './users-configuration.component.css'
})
export class UsersConfigurationComponent implements OnInit{
  user!: User;
  userForm!: FormGroup;

  constructor(private route: ActivatedRoute, private userService: UsersApiService) {
    this.userForm = new FormGroup({
      'fullname': new FormControl(''),
      'email': new FormControl(''),
      'password': new FormControl(''),
      'newPassword': new FormControl('')
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userService.getOne(params['id']).subscribe(user => {
        this.user = user;
        this.userForm.setValue({
          'fullname': this.user.fullname,
          'email': this.user.email,
          'password': this.user.password,
          'newPassword': ''
        });
      });
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      const updatedUser = {
        ...this.user,
        fullname: this.userForm.value.fullname,
        email: this.userForm.value.email,
        password: this.userForm.value.newPassword ? this.userForm.value.newPassword : this.user.password
      };
      this.userService.update(this.user.id, updatedUser).subscribe();
    }
  }
}
