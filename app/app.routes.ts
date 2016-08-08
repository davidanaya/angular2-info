import { provideRouter, RouterConfig }  from '@angular/router';

//import { SchedulesComponent } from 'schedules';
//import { MedalsComponent } from 'medals';
import { SchedulesService, SchedulesComponent, CompetitionScheduleComponent, BySportAndDateComponent, ScheduleByNocComponent, ActivityListComponent, NonCompetitionComponent } from './components/schedules';
import { MedalsComponent } from './components/medals';
import { CrossCountryComponent, CcsRes03Component, CcsCls01Component, CcsBrk01Component } from './components/sports/components/cross-country';
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
    path: 'results/CCS/:rsc',
    component: CrossCountryComponent,
    children: [
      { 
        path: '', 
        redirectTo: 'CCS_RES03', 
        pathMatch: 'full'
      },
      {
        path: 'CCS_RES03',
        component: CcsRes03Component
      },
      {
        path: 'CCS_CLS01',
        component: CcsCls01Component
      },
      {
        path: 'CCS_BRK01',
        component: CcsBrk01Component
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
