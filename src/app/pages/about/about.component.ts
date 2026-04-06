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
      title: 'Fish seed farming',
      description: 'We raise murrel fingerlings in clean nursery environments to support pond stocking and long-term fish farming success.',
      icon: 'bi-flower1',
    },
    {
      title: 'Sustainable aquaculture',
      description: 'Healthy water management, careful grading, and responsible handling help maintain reliable seed quality for farmers.',
      icon: 'bi-stars',
    },
    {
      title: 'Pure honey collection',
      description: 'Honey is collected from natural sources with emphasis on purity, no additives, and trusted quality for every customer.',
      icon: 'bi-shield-check',
    },
  ];
}
