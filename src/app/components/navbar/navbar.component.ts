import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { BusinessDataService } from '../../services/business-data.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  private readonly businessDataService = inject(BusinessDataService);

  protected readonly business = this.businessDataService.getBusinessInfo();
  protected readonly navItems = [
    { label: 'Home', path: '/home' },
    { label: 'Products', path: '/products' },
    { label: 'About', path: '/about' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' },
  ];

  protected isMenuOpen = false;

  protected toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  protected closeMenu(): void {
    this.isMenuOpen = false;
  }
}
