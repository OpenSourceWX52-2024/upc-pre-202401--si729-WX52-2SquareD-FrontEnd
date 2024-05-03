import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-users-configuration',
  standalone: true,
  imports: [
    MatCardModule,
    MatButton,
    MatGridListModule,
    MatFormField,
    MatInput
  ],
  templateUrl: './users-configuration.component.html',
  styleUrl: './users-configuration.component.css'
})
export class UsersConfigurationComponent {

}
