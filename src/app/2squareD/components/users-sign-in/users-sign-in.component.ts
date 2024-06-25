import {AfterContentInit, Component, OnInit} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {UsersApiService} from "../../services/users-api.service";
import {User} from "../../models/user.entity";
import { Router } from '@angular/router';
import {FormsModule} from "@angular/forms";
import {MatOption, MatSelectModule} from "@angular/material/select";
import {Student} from "../../models/student.entity";
import {Teacher} from "../../models/teacher.entity";
import {StudentsApiService} from "../../services/students-api.service";
import {TeachersApiService} from "../../services/teachers-api.service";

interface Rol {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-users-sign-in',
  standalone: true,
  imports: [
    MatButton,
    MatFormField,
    MatInputModule,
    MatLabel,
    FormsModule,
    MatSelectModule,
    MatOption
  ],
  templateUrl: './users-sign-in.component.html',
  styleUrl: './users-sign-in.component.css'

})



export class UsersSignInComponent {

  userData: User={
    id:0,
    username:"",
    fullname:"",
    email:"",
    password:"",
    role:""
  };
  selectedRole!: string;
  newId:number=0
  constructor(private router: Router,
              private usersService: UsersApiService,
              private studentsService: StudentsApiService,
              private teachersService: TeachersApiService) {
    this.userData = {} as User;
  }

  rols: Rol[] = [
    {value: 'student', viewValue: 'Estudiante'},
    {value: 'teacher', viewValue: 'Profesor'}
  ];

  redirectToLogin() {
    this.router.navigate(['/login']);
  }

  registerUser() {
    this.newId=0
    this.usersService.getAll().subscribe((response:User[]) => {
      console.log(response.length +1);
      console.log(this.newId)
      const newUser = new User(this.newId, this.userData.username, this.userData.fullname, this.userData.email, this.userData.password, this.selectedRole);

      this.createUser(newUser);
    })
  }

  private createUser(user: User) {
    this.usersService.post(user).subscribe((response: any) => {
      console.log(response);
      if (this.selectedRole === 'student') {
        const newStudent = new Student(this.newId, response.id);
        this.studentsService.post(newStudent).subscribe((response: any) => {
          console.log('New student:', response);
        });
      } else if (this.selectedRole === 'teacher') {
        const newTeacher = new Teacher(this.newId, response.id);
        this.teachersService.post(newTeacher).subscribe((response: any) => {
          console.log('New teacher:', response);
        });
      }
      this.redirectToLogin();
    });
  }
}
