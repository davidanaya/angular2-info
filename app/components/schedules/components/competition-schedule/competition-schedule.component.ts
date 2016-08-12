import { Component } from '@angular/core';

import { SchedulesService, SchedulesScreenComponentBase, Filter } from '../../../schedules';
import { HelperService, CommonCodesService } from '../../../../shared';

@Component({
  selector: 'ao-competition-schedule',
  templateUrl: 'app/components/schedules/components/competition-schedule/competition-schedule.component.html',
  styleUrls: ['app/components/schedules/schedules.component.css']
})
export class CompetitionScheduleComponent extends SchedulesScreenComponentBase {
  private filter = new Filter();
  // get this dinamically from date!!
  competitionDaysNumber: number;
  competitionMonth: string;
  competitionDaysDates: string[];
  // X selection
  // onmouseover
	row: string = '';
	column: string = '';

  constructor(
    schedulesService: SchedulesService, 
    commonCodesService: CommonCodesService,
    private helperService: HelperService) { 
    super(schedulesService, commonCodesService);
  }

  ngOnInit() {
    super.ngOnInit();
    this.competitionDaysDates = this.helperService.getCompetitionDaysList();
    this.competitionMonth = this.helperService.getCompetitionMonth();
    this.competitionDaysNumber = this.helperService.getNumberOfCompetitionDays() + 1;
  }

  // on events
  onUpdateFilter(event) {
    // not implemented
  }

  onMouseOver(row, column) {
		this.row = row;
		this.column = column;
	}
		
	isXSelection(row, column) {
		if (column === '') {
			return row === this.row;
		}
		return row === this.row || column === this.column;
	}
		
	resetXSelection() {
		this.row = null;
	  this.column = null;
	}

  // methods
  getCompetitionDayStyles(competitionDays, date) : string {
    const CURRENT_DAY = '16'; // TODO esto sera una fecha de configuracion
		let day = date.split(' ')[1];
		let competitionDay = competitionDays.split(',');
    let hasCompetition = false;
    let isCurrentDay = CURRENT_DAY === day ? true : false;
		for (let d in competitionDay) {
			let dayAndMedal = competitionDay[d].split('#');
      if (day === dayAndMedal[0]) {
        if (dayAndMedal[1]) {
          return isCurrentDay ? 'currentDay hasCompetition hasMedalEvent' : 'hasCompetition hasMedalEvent';
        } else {
          hasCompetition = true;
        }
      }
		}
    if (hasCompetition) {
      return isCurrentDay ? 'currentDay hasCompetition' : 'hasCompetition';
    }
    return isCurrentDay ? 'currentDay' : '';
	}		

  updateSchedules(page: number) {
    console.log(`updating schedules for competitionSchedule`);
    //console.log(`filter is ${ JSON.stringify(this.filter) }`);
    //console.log(`competitionDaysDates is ${ JSON.stringify(this.competitionDaysDates) }`);
    let resultSet = this.schedulesService.getCompetitionSchedule();
    this.schedules = resultSet.results;
    this.pageSet = resultSet.pageSet;
    //console.log(`schedules is ${ JSON.stringify(this.schedules) }`);
  }

}