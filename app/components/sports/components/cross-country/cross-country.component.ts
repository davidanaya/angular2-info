import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

import { CcsRes03Component, CcsCls01Component, CcsBrk01Component } from '../cross-country';

@Component({
  selector: 'ao-cross-country',
  template: `<router-outlet></router-outlet>`,
  directives: [ ROUTER_DIRECTIVES ],
  precompile: [ 
    CcsRes03Component,
    CcsCls01Component,
    CcsBrk01Component
  ]
})
export class CrossCountryComponent {
}