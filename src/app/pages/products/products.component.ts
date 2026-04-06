import { Component, inject } from '@angular/core';

import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { BusinessDataService } from '../../services/business-data.service';

@Component({
  selector: 'app-products',
  imports: [ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  private readonly businessDataService = inject(BusinessDataService);

  protected readonly categories = this.businessDataService.getProductCategories();
  protected readonly fishSeedNotes = [
    'Fingerlings are used to stock fish ponds and start aquaculture production.',
    'Healthy seed selection supports better survival, growth, and farm performance.',
    'Available in different sizes based on pond stage and farming needs.',
  ];
}
