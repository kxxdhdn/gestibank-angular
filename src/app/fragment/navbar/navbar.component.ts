import { Component, Input } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  // Toggle navbar
  navbarOpen = false;
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  // Active link
  currentRoute: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe((val) => {
      this.currentRoute = this.router.url;
    });
  }

  isLinkActive(path: string): boolean {
    return this.currentRoute === path;
  }
}
