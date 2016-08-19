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
  }
];

export const routing = RouterModule.forRoot(routes);
