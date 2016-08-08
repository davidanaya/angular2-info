import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Constants } from '../../shared';
import { Schedule } from '../../components/schedules';

@Injectable()
export class HelperService {

	dateToString(d: Date, format: string = 'yyyy-MM-dd') : string {
		return new DatePipe().transform(d, format);
	}

  getCompetitionDaysList() : any[] {
		let competitionDays : any[] = [];	
		let iDate = new Date(Constants.START_DATE.getTime());
		while (iDate.getTime() !== Constants.END_DATE.getTime()) {
			var value : string[] = [];					
			value[0] = new DatePipe().transform(iDate, 'EEE') + ' ' + iDate.getDate();
			value[1] = this.dateToString(iDate);
			competitionDays.push(value);
			iDate.setDate(iDate.getDate() + 1);
		}
		//console.log(`competitionDays ${ JSON.stringify(competitionDays) }`);
		return competitionDays;
	}

	getCompetitionMonth() : string {
		let months = {};
		let iDate = new Date(Constants.START_DATE.getTime());
		while (iDate.getTime() !== Constants.END_DATE.getTime()) {
			months[iDate.getMonth()] = new DatePipe().transform(iDate, 'MMMM');
			iDate.setDate(iDate.getDate() + 1);					
		}
		let month = '';
		for (var m in months) {
			month = month === '' ? months[m] : month + ',' + months[m];
		}
		return month;			
	}

	getSportsEventUnitLink(schedule: Schedule) : string {
		return `/results/${ schedule.sport }/${ schedule.rsc }`;
	}

	getNumberOfCompetitionDays() : number {
		let numberOfDays = 0;				
		let iDate = new Date(Constants.START_DATE.getTime());
		while (iDate.getTime() !== Constants.END_DATE.getTime()) {
			numberOfDays++;
			iDate.setDate(iDate.getDate() + 1);	
		}
		return numberOfDays;
	}

}