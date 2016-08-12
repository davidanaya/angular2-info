import { RouterModule } from '@angular/router';

import { SchedulesService, SchedulesComponent, CompetitionScheduleComponent, BySportAndDateComponent, ScheduleByNocComponent, ActivityListComponent, NonCompetitionComponent } from './';
import { CommonCodesService } from '../../shared';

export const routing = RouterModule.forChild([
  { 
    path: 'schedules', 
    component: SchedulesComponent,
    canActivate: [ CommonCodesService ],
    children: [
      { 
        path: '', 
        redirectTo: 'competitionSchedule', 
        pathMatch: 'full'
      },
      {
        path: 'competitionSchedule',
        component: CompetitionScheduleComponent
      },
      {
        path: 'bySportAndDate',
        component: BySportAndDateComponent
      },
      {
        path: 'scheduleByNoc',
        component: ScheduleByNocComponent
      },
      {
        path: 'activityList',
        component: ActivityListComponent
      },
      {
        path: 'nonCompetition',
        component: NonCompetitionComponent
      }
    ]
  }
]);
