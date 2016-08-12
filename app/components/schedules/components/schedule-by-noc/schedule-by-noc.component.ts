import { Component } from '@angular/core';

import { SchedulesService, SchedulesScreenComponentBase } from '../../../schedules';
import { CommonCodesService } from '../../../../shared';

@Component({
  selector: 'ao-schedule-by-noc',
  templateUrl: 'app/components/schedules/components/schedule-by-noc/schedule-by-noc.component.html',
  styleUrls: ['app/components/schedules/schedules.component.css']
})
export class ScheduleByNocComponent extends SchedulesScreenComponentBase {

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