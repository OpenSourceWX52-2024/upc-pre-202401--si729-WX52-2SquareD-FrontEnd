import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {TheSidebarContentComponent} from "./public/components/the-sidebar-content/the-sidebar-content.component";
import {TheFooterContentComponent} from "./public/components/the-footer-content/the-footer-content.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TheSidebarContentComponent, TheFooterContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '2Square-Frontend';
}
