import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AddBanqueComponent } from './banque/add-banque/add-banque.component';
import { ListBanqueComponent } from "./banque/list-banque/list-banque.component";
import { ContactComponent } from './dashboard/contact/contact.component';
import { NavbarComponent } from "./fragment/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, ListBanqueComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
}) 
export class AppComponent {
  title = 'GestiBank';
}
