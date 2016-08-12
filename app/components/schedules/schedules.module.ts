import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared';
import { routing } from './schedules.routing';
import { SchedulesComponent, SchedulesService, SchNavigationComponent, ActivityListComponent, BySportAndDateComponent, CompetitionScheduleComponent, NonCompetitionComponent, ScheduleByNocComponent } from '../schedules';

@NgModule({
  imports: [ 
    routing,
    SharedModule.forRoot()
  ],
  declarations: [
    SchedulesComponent,
    SchNavigationComponent,
    ActivityListComponent,
    BySportAndDateComponent,
    CompetitionScheduleComponent,
    NonCompetitionComponent,
    ScheduleByNocComponent
  ],
  providers: [ SchedulesService ]
})
export class SchedulesModule { }
