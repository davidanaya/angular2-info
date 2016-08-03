import { provideRouter, RouterConfig }  from '@angular/router';

//import { SchedulesComponent } from 'schedules';
//import { MedalsComponent } from 'medals';
import { SchedulesService, SchedulesComponent, CompetitionScheduleComponent, BySportAndDateComponent, ScheduleByNocComponent, ActivityListComponent, NonCompetitionComponent } from './components/schedules';
import { MedalsComponent } from './components/medals';
import { CommonCodesService } from './shared';

const routes: RouterConfig = [
  {
    path: '',
    redirectTo: 'schedules',
    pathMatch: 'full'
  },
  {
    path: 'schedules',
    component: SchedulesComponent,
    children: [
      { 
        path: '', 
        redirectTo: 'competitionSchedule', 
        pathMatch: 'full'
      },
      {
        path: 'competitionSchedule',
        component: CompetitionScheduleComponent,
        canActivate: [ CommonCodesService ]
      },
      {
        path: 'bySportAndDate',
        component: BySportAndDateComponent,
        canActivate: [ CommonCodesService ]
      },
      {
        path: 'scheduleByNoc',
        component: ScheduleByNocComponent,
        canActivate: [ CommonCodesService ]
      },
      {
        path: 'activityList',
        component: ActivityListComponent,
        canActivate: [ CommonCodesService ]
      },
      {
        path: 'nonCompetition',
        component: NonCompetitionComponent,
        canActivate: [ CommonCodesService ]
      }
    ]
  },
  {
    path: 'medals',
    component: MedalsComponent
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
