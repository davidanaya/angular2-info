import { Component } from '@angular/core';

import { SchedulesService, SchedulesScreenComponentBase } from '../../../schedules';
import { CommonCodesService } from '../../../../shared';

@Component({
  selector: 'ao-non-competition',
  templateUrl: 'app/components/schedules/components/non-competition/non-competition.component.html',
  styleUrls: ['app/components/schedules/schedules.component.css']
})
export class NonCompetitionComponent extends SchedulesScreenComponentBase {

  constructor(schedulesService: SchedulesService, commonCodesService: CommonCodesService) { 
    super(schedulesService, commonCodesService);
  }
  
  // on events
  onUpdateFilter(event) {
    // not implemented
  }

  updateSchedules(page: number) {
    // not implemented
  }

}