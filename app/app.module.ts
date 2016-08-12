import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// feature modules
import { SchedulesModule } from './components/schedules';
import { MedalsModule } from './components/medals';
import { CrossCountryModule } from './components/sports/components/cross-country';
import { routing } from './app.routing';

@NgModule({
  imports: [ 
    BrowserModule, 
    SchedulesModule,
    MedalsModule,
    CrossCountryModule,
    routing
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
