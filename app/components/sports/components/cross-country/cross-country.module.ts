import { NgModule } from '@angular/core';

import { SharedModule } from '../../../../shared';
import { routing } from './cross-country.routing';
import { CrossCountryComponent, CcsBrk01Component, CcsRes03Component, CcsCls01Component } from '../cross-country';

@NgModule({
  imports: [ 
    routing,
    SharedModule.forRoot() 
  ],
  declarations: [
    CrossCountryComponent,
    CcsBrk01Component,
    CcsRes03Component,
    CcsCls01Component
  ]
})
export class CrossCountryModule { }
