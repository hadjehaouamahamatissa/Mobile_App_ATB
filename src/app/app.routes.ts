import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/register/register.page').then((m) => m.RegisterPage),
  },
  {
    path: 'app',
    loadComponent: () =>
      import('./pages/menu/menu.page').then((m) => m.MenuPage),
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./pages/services/services.page').then((m) => m.ServicesPage),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.page').then((m) => m.AboutPage),
  },
  {
    path: 'service-detail',
    loadComponent: () => import('./pages/service-detail/service-detail.page').then( m => m.ServiceDetailPage)
  },
  {
    path: 'contact',
    loadComponent: () => 
      import('./pages/contact/contact.page').then( (m) => m.ContactPage),
  },
  // {
  //   path: 'services',
  //   loadComponent: () =>
  //     import('./services/contact.service').then((m) => m.ContactService)
  // }, 
];
