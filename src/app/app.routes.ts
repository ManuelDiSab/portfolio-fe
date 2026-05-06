import { Routes } from '@angular/router';
import { HomepageComponent } from './_pagine/homepage/homepage.component';
import { authGuard } from './_servizi/auth.guard';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  {
    path: 'login', loadComponent: () => import('./_pagine/login/login.component')
      .then(m => m.LoginComponent)
  },
  {
    path: 'dashboard', loadComponent: () => import('./_pagine/dashboard/dashboard.component').then(m => m.DashboardComponent), canActivate: [authGuard]
  },
  {
    path: 'dashboard/progetti/nuovo', loadComponent: () => import('./_componenti/project-form/project-form.component').then(m => m.ProjectFormComponent), canActivate: [authGuard]
  },
  {
    path: 'dashboard/progetti/:id', loadComponent: () => import('./_componenti/project-form/project-form.component').then(m => m.ProjectFormComponent), canActivate: [authGuard]
  },
  {
    path: '**', loadComponent: () => import('./_pagine/notfound/notfound.component')
      .then(m => m.NotfoundComponent)
  }
];
