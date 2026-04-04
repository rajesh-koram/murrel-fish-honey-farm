import { Component, inject } from '@angular/core';

import { BusinessDataService } from '../../services/business-data.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent {
  private readonly businessDataService = inject(BusinessDataService);

  protected readonly galleryItems = this.businessDataService.getGalleryItems();
}
