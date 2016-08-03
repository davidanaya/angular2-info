import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgClass } from '@angular/common';

import { SchedulesService, Schedule, SchedulesScreenComponentBase, SchNavigationComponent, Filter } from '../../../schedules';
import { CommonCodesService, SportIconComponent, ResultSet, PageSet, PaginationComponent, DateFormatterComponent } from '../../../../shared';

@Component({
  selector: 'ao-by-sport-and-date',
  templateUrl: 'app/components/schedules/components/by-sport-and-date/by-sport-and-date.component.html',
  styleUrls: ['app/components/schedules/schedules.component.css'],
  directives: [ SportIconComponent, PaginationComponent, DateFormatterComponent, NgClass, SchNavigationComponent ]
})
export class BySportAndDateComponent extends SchedulesScreenComponentBase {
  private filter = new Filter();

  constructor(schedulesService: SchedulesService, commonCodesService: CommonCodesService) { 
    super(schedulesService, commonCodesService);
  }

  // on events
  onUpdateFilter(event) {
    this.filter.sport = event.sport;
    this.filter.event = event.event;
    this.updateSchedules(1);
  }

  isGender(gender) {
		return !gender ? this.filter.gender === '' : this.filter.gender === gender;
	}
  setGender(gender) {
    if (this.filter.gender !== gender) {
      this.filter.gender = !gender ? '' : gender;
      this.updateSchedules(1);
    }
  }

  updateSchedules(page: number) {
    //console.log(`updating schedules for bySportAndDateComponent`);
    let resultSet = this.schedulesService.getPaginated(this.filter, page, this.order, this.reverse);
    this.schedules = resultSet.results;
    this.pageSet = resultSet.pageSet;
  }

}
