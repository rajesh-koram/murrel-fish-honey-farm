import { Component, inject } from '@angular/core';

import { BusinessDataService } from '../../services/business-data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  private readonly businessDataService = inject(BusinessDataService);

  protected readonly business = this.businessDataService.getBusinessInfo();
  protected readonly strengths = [
    {
      title: 'Natural farming approach',
      description: 'We maintain clean pond conditions and support honey collection practices that respect the natural cycle.',
      icon: 'bi-flower1',
    },
    {
      title: 'Freshness you can trust',
      description: 'Orders are handled with attention and supplied quickly to preserve taste, texture, and purity.',
      icon: 'bi-stars',
    },
    {
      title: 'Quality assurance',
      description: 'Every batch is selected carefully so customers receive consistent products they can recommend with confidence.',
      icon: 'bi-shield-check',
    },
  ];
}
