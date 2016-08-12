import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'schedules', 
    pathMatch: 'full'
  }
];

export const routing = RouterModule.forRoot(routes);
