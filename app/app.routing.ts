import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'schedules', 
    pathMatch: 'full'
  },
  {
    path: 'medals',
    loadChildren: 'app/components/medals/medals.module#MedalsModule'
  },
  {
    path: 'results/CCS',
    loadChildren: 'app/components/sports/components/cross-country/cross-country.module#CrossCountryModule'
  }
];

export const routing = RouterModule.forRoot(routes);
