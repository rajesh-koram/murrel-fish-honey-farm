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
  protected readonly fishSeedFacts = [
    'Young fingerlings supplied for pond stocking and aquaculture use.',
    'Healthy, active, and disease-free stock selected for reliable farm growth.',
    'Available in different sizes to match early-stage and growing pond needs.',
  ];
  protected readonly highlights = [
    {
      title: 'Sustainable Aquaculture',
      description: 'Fish seed production is handled with clean water management, careful nursery practices, and farm-ready stocking support.',
      icon: 'bi-tree-fill',
    },
    {
      title: 'Healthy Seed Supply',
      description: 'Murrel fingerlings are selected for quality, vitality, and dependable performance in fish farming ponds.',
      icon: 'bi-droplet-half',
    },
    {
      title: 'Pure Natural Honey',
      description: 'Honey is collected from natural sources with focus on purity, no additives, and trusted quality.',
      icon: 'bi-patch-check-fill',
    },
  ];

  protected readonly heroDesktopImage = `url('${this.business.heroImage}')`;
  protected readonly heroMobileImage = `url('${this.business.heroImageMobile}')`;
}
