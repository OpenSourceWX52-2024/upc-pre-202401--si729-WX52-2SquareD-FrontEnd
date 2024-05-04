import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogPaymentComponent } from '../dialog-payment/dialog-payment.component';
import {Router} from "@angular/router";

@Component({
  selector: 'app-plans-view',
  standalone: true,
  imports: [

  ],
  templateUrl: './plans-view.component.html',
  styleUrl: './plans-view.component.css'
})
export class PlansViewComponent {
  currentPlan = 'Tu plan actual: Gratuito';
  currentPlanColor = 'linear-gradient(to right, #4fe28b, #3f9ee9)';
  buttonText = 'OBTENER';

  constructor(private router: Router,public dialog: MatDialog) {}

  changePlan(planName: string, color: string) {
    this.currentPlan = `Tu plan actual: ${planName}`;
    this.currentPlanColor = color;
    this.buttonText = 'LO TIENES';

    this.dialog.open(DialogPaymentComponent, {
      data: {
        cardHolderName: '',
        cardNumber: '',
        expiryDate: '',
        securityCode: ''
      },
      width: '500px' // Ajusta este valor a tus necesidades
    });
  }

  resetPlan() {
    this.currentPlan = 'Tu plan actual: Gratuito';
    this.currentPlanColor = 'linear-gradient(to right, #4fe28b, #3f9ee9)';
    this.buttonText = 'OBTENER';
  }
}
