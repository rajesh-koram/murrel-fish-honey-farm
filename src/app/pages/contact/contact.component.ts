import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { BusinessDataService } from '../../services/business-data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  private readonly businessDataService = inject(BusinessDataService);
  private readonly sanitizer = inject(DomSanitizer);

  protected readonly business = this.businessDataService.getBusinessInfo();
  protected readonly mapUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    this.business.mapEmbedUrl,
  );
}
