import { Injectable } from '@angular/core';

import { Observable } from "rxjs/Rx";

//import { Schedule, SCHEDULES } from 'schedules';
//import { DataService } from 'shared';
import { Schedule, Filter } from '../../schedules';
import { DataService, CommonCodesService, ResultSet, PAGE_SIZE, OrderByPipe, Constants } from '../../../shared';

@Injectable()
export class SchedulesService {
  private schedules: Schedule[];
  private url = `//localhost${ Constants.CONTEXT_PATH }${ Constants.DATA_PATH }/CAT/CAT-------------------------------/SCHEDULES.json`;
  private schedulesObservable : Observable<boolean>;

  constructor(
    private dataService: DataService,
    private commonCodesService: CommonCodesService) {
  }

  getPaginated(filter: Filter, page: number, order: string, reverse: boolean) : ResultSet {
    let filtered = filter ? this.filterBySportAndDate(filter, order, reverse) : this.schedules;
    let sorted = this.sort(filtered, order, reverse);
    let paginated = sorted.slice((page - 1) * PAGE_SIZE, (page * PAGE_SIZE));
    let resultSet = new ResultSet();
    resultSet.update(paginated, page, filtered.length);
    return resultSet;
  }

  getCompetitionSchedule() : ResultSet {
    let sportsList = this.commonCodesService.getSportList();
    let byHours = {};
		byHours['CER'] = { sport:this.commonCodesService.getValue('discipline', 'CER'), sportCode:'CER', days: ''}
		for (let isport in sportsList) {
			byHours[sportsList[isport].id] = { sport:sportsList[isport].name, sportCode:sportsList[isport].id, days: ''}
  	}
    for (let s in this.schedules) {
      if (this.commonCodesService.isPhaseType(this.schedules[s].rsc) && this.schedules[s].status !== 'UNSCHEDULED') {
        let compDate = this.parseDate(this.schedules[s].startDate);
        let isMedal = this.schedules[s].medal === '1' || this.schedules[s].medal === '2';
        let day = isMedal ? compDate.getDate() + '#' + this.schedules[s].medal : compDate.getDate();
        let isFirstDay = byHours[this.schedules[s].sport].days === '';
        day = isFirstDay ? day : ',' + day;
        byHours[this.schedules[s].sport].days += day;
      }
    }
    //console.log(`byHours: ${ JSON.stringify(byHours) }`);
    // convert into array
		let competitionSchedule = Object.keys(byHours).map(function (key) { return byHours[key]; });		
    let resultSet = new ResultSet();
    resultSet.update(competitionSchedule, 1, competitionSchedule.length);
    return resultSet;
  }

  loadSchedules() {
    if (this.schedulesObservable) {
      //console.log('schedules already loaded, return observable');
      return this.schedulesObservable;
    }
    this.schedulesObservable = this.dataService
      .getJson(this.url, Constants.UPDATE_INTERVAL_DATA)
      .map(data => {
        this.schedules = data.schedules.list.map(item => {
          item.dStartDate = this.parseDate(item.startDate, item.startTime);
          item.dEndDate = this.parseDate(item.endDate, item.endTime);
          item.statusName = this.commonCodesService.getValue('schedulestatus', item.status);
          item.locName = this.commonCodesService.getValue('location', item.location);
          item.eventName = this.commonCodesService.getValue('eventunit', item.rsc);	
          return item;
        });
        return true;
      });
    return this.schedulesObservable;
  }

  private getOrderCriteria(order) : string[] {
	  let sortByArray: string[];
		switch (order) {
			case 'byTime':
				/*if (sport && sport !== '') {
					sortByArray = ['startDate', 'location', 'unit', 'startTime', 'eventName'];
				} else { */
					sortByArray = ['startDate', 'startTime', 'sport', 'location', 'unit', 'eventName'];
				//}
				break;
			case 'bySport':
				sortByArray = ['sport', 'startDate', 'startTime', 'location', 'eventName'];
				break;
			case 'byEvent':
				sortByArray = ['eventName', 'startDate', 'startTime', 'sport', 'location'];
				break;
			case 'byLocation':
				sortByArray = ['locName', 'startDate', 'startTime', 'unit', 'eventName'];
				break;
			case 'byStatus':
				sortByArray = ['status', 'startDate', 'startTime', 'location', 'sport', 'eventName'];
				break;
			default:									
				break;
		}
		return sortByArray;
	}

  private filterBySportAndDate(filter: Filter, order: string, reverse: boolean) : Schedule[] {
    //console.log(`filtering... with ${ JSON.stringify(filter)}`);
    return this.schedules.filter(item => {
      //console.log(`item with ${ item.gender } ${ item.sport } ${ item.event }`);
      if (filter.gender !== '' && item.gender !== filter.gender) return false;
      if (filter.sport !== '' && item.sport !== filter.sport) return false;
      if (filter.event !== '' && item.event !== filter.event) return false;
      return true;
    });
  }

  private parseDate(date: string, time?: string) : Date {
    let dSplit = date.split('-');
    if (time) {
      let tSplit = time.split(':');
      return new Date(Number(dSplit[0]), Number(dSplit[1]), Number(dSplit[2]), Number(tSplit[0]), Number(tSplit[1]));
    } else {
      return new Date(Number(dSplit[0]), Number(dSplit[1]), Number(dSplit[2]));
    }
  }

  private sort(filtered: Schedule[], order: string, reverse: boolean) : Schedule[] {
    let orderCriteria = this.getOrderCriteria(order);
    //console.log(`sorting... with ${ orderCriteria }`);
    return new OrderByPipe().transform(filtered, orderCriteria, reverse);
  }

}
