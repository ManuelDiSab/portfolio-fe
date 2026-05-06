import { Routes } from '@angular/router';
import { HomepageComponent } from './_pagine/homepage/homepage.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  {
    path: 'login', loadComponent: () => import('./_pagine/login/login.component')
      .then(m => m.LoginComponent)
  },
  {
    path: '**', loadComponent: () => import('./_pagine/notfound/notfound.component')
      .then(m => m.NotfoundComponent)
  }
];
