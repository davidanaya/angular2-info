import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgClass } from '@angular/common';

import { SchedulesService, Schedule, SchedulesScreenComponentBase, SchNavigationComponent, Filter } from '../../../schedules';
import { CommonCodesService, SportIconComponent, ResultSet, PageSet, PaginationComponent, DateFormatterComponent } from '../../../../shared';

@Component({
  selector: 'ao-non-competition',
  templateUrl: 'app/components/schedules/components/non-competition/non-competition.component.html',
  styleUrls: ['app/components/schedules/schedules.component.css'],
  directives: [ SportIconComponent, PaginationComponent, DateFormatterComponent, NgClass, SchNavigationComponent ]
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