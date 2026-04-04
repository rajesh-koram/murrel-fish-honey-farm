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
}
