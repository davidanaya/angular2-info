import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

//import { SchedulesComponent } from 'schedules';
//import { MedalsComponent } from 'medals';
import { SchedulesComponent } from './components/schedules';
import { MedalsComponent } from './components/medals';
import { CrossCountryComponent } from './components/sports/components/cross-country';

@Component({
	selector: 'app',
	templateUrl: 'app/app.component.html',
	styleUrls: [ 'app/app.component.css' ],
	directives: [ ROUTER_DIRECTIVES ],
	precompile: [ 
		SchedulesComponent, 
		MedalsComponent, 
		CrossCountryComponent 
	]
})
export class AppComponent {
}
