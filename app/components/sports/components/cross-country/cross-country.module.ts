import { NgModule } from '@angular/core';

import { routing } from './cross-country.routing';
import { CrossCountryComponent, CcsBrk01Component, CcsRes03Component, CcsCls01Component } from '../cross-country';

@NgModule({
  imports: [ 
    routing
  ],
  declarations: [
    CrossCountryComponent,
    CcsBrk01Component,
    CcsRes03Component,
    CcsCls01Component
  ]
})
export class CrossCountryModule { }
