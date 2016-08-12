import { RouterModule } from '@angular/router';

import { CrossCountryComponent, CcsRes03Component, CcsCls01Component, CcsBrk01Component } from './';

export const routing = RouterModule.forChild([
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
  }
]);
