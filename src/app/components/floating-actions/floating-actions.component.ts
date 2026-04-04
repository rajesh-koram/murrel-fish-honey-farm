import { Component, inject } from '@angular/core';

import { BusinessDataService } from '../../services/business-data.service';

@Component({
  selector: 'app-floating-actions',
  templateUrl: './floating-actions.component.html',
  styleUrl: './floating-actions.component.css',
})
export class FloatingActionsComponent {
  private readonly businessDataService = inject(BusinessDataService);

  protected readonly business = this.businessDataService.getBusinessInfo();
}
