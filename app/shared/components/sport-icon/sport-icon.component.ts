import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { CommonCodesService } from '../../../shared';

@Component({
  selector: 'ao-sport-icon',
  templateUrl: 'app/shared/components/sport-icon/sport-icon.component.html'
})
export class SportIconComponent implements OnChanges {
  @Input() sport: string;
  @Input() fullName = false;
  sportName : string;

  constructor(private commonCodesService: CommonCodesService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['sport']) {
      this.sportName = this.fullName ? this.commonCodesService.getValue('discipline', this.sport) : this.sport;	
    }
  }

}
