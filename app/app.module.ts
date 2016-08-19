import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// feature modules
import { SchedulesModule } from './components/schedules';
import { routing } from './app.routing';

@NgModule({
  imports: [ 
    BrowserModule, 
    SchedulesModule,
    routing
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
