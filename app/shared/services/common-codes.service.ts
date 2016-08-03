import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { Observable } from "rxjs/Rx";

//import { DataService } from 'shared';
import { DataService, Constants } from '../../shared';

@Injectable()
export class CommonCodesService implements CanActivate {
	private url = `//localhost${ Constants.CONTEXT_PATH }${ Constants.DATA_PATH }/CCO/CCO-------------------------------/CC_ENG.json`;
  private commonCodes = [];
	private isLoaded = false; // true if common codes have already been loaded

  constructor(private dataService: DataService) {
  }

	// before the user gets in, this has to return true
  canActivate() {
    // get common codes and return true when got them
    return this.loadCommonCodes()
      .map(loaded => {
        if (loaded) {
          console.log('common codes loaded');
        } else {
          console.log('common codes already loaded');
        }
        return true;
      });
  }

	private compare(a, b) : number {
		if (a.name < b.name)
			return -1;
		if (a.name > b.name)				
			return 1;
		return 0;
	}

  getValue(category: string, code: string) : string {
    if (code && category) {
      // if no code or category returns code
      if (this.commonCodes[category]) {
        if (this.commonCodes[category][code]) {
          return this.commonCodes[category][code]['ShortName'];
        }
      }
    }
    return code;
  }

  loadCommonCodes() {
		if (this.isLoaded) {
			// already loaded, no need to read again
			return Observable.of(false);
		} else {
			return this.dataService.getJson(this.url, -1)
				.map(data => {
					for (let key in data) {
						if (!data.hasOwnProperty(key)) {
							continue;
						}
						// code, rsc and version are no common codes
						if (key !== 'code' && key !== 'rsc' && key !== 'version') {
							this.commonCodes[key.toLowerCase()] = data[key].values;
						}
					}
					this.isLoaded = true;
					console.log(this.commonCodes);
					return true;
				});
		}
  }

  getSportList() : any[] {
		let ccDisciplines = this.commonCodes['discipline'];
		let sportList: any[] = [];

		for (let d in ccDisciplines) {
			if (Object.prototype.hasOwnProperty.call(ccDisciplines, d)) {
	  		let val = ccDisciplines[d];
				if (val.isSport === 'Y') {
					let discipline = { id:d, name:val.ShortName };
					sportList.push(discipline);
				}				    
			}
		}			
		return sportList.sort(this.compare);
	}

  getEventsList(sport) : any[] {
		let ccEvents = this.commonCodes['event'];
		let eventList: any[] = [];
				
		for (let e in ccEvents) {
			if (Object.prototype.hasOwnProperty.call(ccEvents, e)) {
				let val = ccEvents[e];
				let evSport = e.substring(0, 3);
				let event = { id:e, name:val.ShortName };						
				if (!sport) {
					if (!eventList[evSport]) {
						eventList[evSport] = [];	
					}
					eventList[evSport].push(event);							
				} else if (sport === evSport) {
					eventList.push(event);
				}
			}
		}				
		return eventList.sort(this.compare);
	}

	isPhaseType(rsc) : boolean {
		let phaseTypeValues = '1,3';		
		if (this.commonCodes['phase']) {	
			if (!rsc) return false;
			let phase = rsc.substring(0,26);
			if (this.commonCodes['phase'][phase]) {
				let phaseType = this.commonCodes['phase'][phase].type;
				if (phaseTypeValues.indexOf(phaseType) !== -1) {
					return true
				}
			}
		}
		return false;
	}

}
