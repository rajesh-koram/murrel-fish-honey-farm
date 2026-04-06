import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { BusinessDataService } from '../../services/business-data.service';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  private readonly businessDataService = inject(BusinessDataService);

  protected readonly business = this.businessDataService.getBusinessInfo();
  protected readonly quickLinks = [
    { label: 'Home', path: '/home' },
    { label: 'Products', path: '/products' },
    { label: 'About', path: '/about' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' },
  ];
}
