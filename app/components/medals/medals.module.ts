import { NgModule } from '@angular/core';

import { routing } from './medals.routing';
import { MedalsComponent } from './';

@NgModule({
  imports: [ 
    routing 
  ],
  declarations: [
    MedalsComponent
  ]
})
export class MedalsModule { }
