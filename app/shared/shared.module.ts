import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpModule } from '@angular/http';

import { OrderByPipe, ComboComponent, DateFormatterComponent, PaginationComponent, SportIconComponent, DataService, CommonCodesService, HelperService } from './';

@NgModule({
  imports: [ 
    CommonModule,
    HttpModule
  ],
  declarations: [ 
    OrderByPipe,
    ComboComponent,
    DateFormatterComponent,
    PaginationComponent,
    SportIconComponent
  ],
  exports: [
    OrderByPipe,
    ComboComponent,
    DateFormatterComponent,
    PaginationComponent,
    SportIconComponent,
    // re-exports so that other modules don´t need to import
    CommonModule
  ]
})
export class SharedModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ 
        DataService,
        HelperService,
        CommonCodesService
      ]
    };
  }
}
