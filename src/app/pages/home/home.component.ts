import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { BusinessDataService } from '../../services/business-data.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink, ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  private readonly businessDataService = inject(BusinessDataService);

  protected readonly business = this.businessDataService.getBusinessInfo();
  protected readonly featuredProducts = this.businessDataService.getFeaturedProducts();
  protected readonly highlights = [
    {
      title: 'Natural Farming',
      description: 'Raised and harvested with a focus on natural methods, clean surroundings, and honest care.',
      icon: 'bi-tree-fill',
    },
    {
      title: 'Freshness First',
      description: 'Fast local delivery and on-demand supply keep fish and honey fresh for every customer.',
      icon: 'bi-droplet-half',
    },
    {
      title: 'Trusted Quality',
      description: 'Every order reflects local experience, careful handling, and dependable product quality.',
      icon: 'bi-patch-check-fill',
    },
  ];

  protected readonly heroBackground = `linear-gradient(135deg, rgba(34, 56, 40, 0.78), rgba(53, 86, 58, 0.52)), url('${this.business.heroImage}')`;
}
