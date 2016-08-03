import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

import { SchedulesService, CompetitionScheduleComponent, BySportAndDateComponent, ScheduleByNocComponent, ActivityListComponent, NonCompetitionComponent } from '../schedules';

@Component({
  selector: 'ao-schedules',
  template: `<router-outlet></router-outlet>`,
  directives: [ ROUTER_DIRECTIVES ],
  precompile: [ 
    CompetitionScheduleComponent,
    BySportAndDateComponent,
    ScheduleByNocComponent,
    ActivityListComponent,
    NonCompetitionComponent
  ],
  providers: [ SchedulesService ]
})
export class SchedulesComponent {
}
