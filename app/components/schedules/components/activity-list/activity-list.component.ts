import { Component } from '@angular/core';

import { SchedulesService, SchedulesScreenComponentBase } from '../../../schedules';
import { CommonCodesService } from '../../../../shared';

@Component({
  selector: 'ao-activity-list',
  templateUrl: 'app/components/schedules/components/activity-list/activity-list.component.html',
  styleUrls: ['app/components/schedules/schedules.component.css']
})
export class ActivityListComponent extends SchedulesScreenComponentBase {

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