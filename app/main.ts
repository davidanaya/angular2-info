// The usual bootstrapping imports
import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

import { provideForms, disableDeprecatedForms } from '@angular/forms';

import { AppComponent } from './app.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import { DataService, CommonCodesService, HelperService } from './shared';

enableProdMode();

bootstrap(AppComponent, [
  provideForms(), disableDeprecatedForms(),
  APP_ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  DataService, CommonCodesService, HelperService
]);
