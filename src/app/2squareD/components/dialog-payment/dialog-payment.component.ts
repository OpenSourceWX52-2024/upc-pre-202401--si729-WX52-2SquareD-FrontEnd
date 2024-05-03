import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-dialog-payment',
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInput,
    MatButton,
    FormsModule
  ],
  templateUrl: './dialog-payment.component.html',
  styleUrl: './dialog-payment.component.css'
})
export class DialogPaymentComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick() {

  }
}
