import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Product } from '../../services/business-data.service';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  readonly product = input.required<Product>();
}
