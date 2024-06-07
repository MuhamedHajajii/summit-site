import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import(
        './core/Components/Pages/blank-layout/blank-layout.component'
      ).then((e) => e.BlankLayoutComponent),
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadComponent: () =>
          import(
            './../app/core/Components/Pages/blank-layout/home/home.component'
          ).then((e) => e.HomeComponent),
        title: 'SUMMIT - الرئيسية',
      },
      {
        path: 'home',
        loadComponent: () =>
          import(
            './../app/core/Components/Pages/blank-layout/about/about.component'
          ).then((e) => e.AboutComponent),
        title: 'SUMMIT - عن الشركة',
      },
      {
        path: 'courses',
        loadComponent: () =>
          import(
            './../app/core/Components/Pages/blank-layout/courses/courses.component'
          ).then((e) => e.CoursesComponent),
        title: 'SUMMIT - فريقنا',
      },
      {
        path: 'home',
        loadComponent: () =>
          import(
            './../app/core/Components/Pages/blank-layout/ourteam/ourteam.component'
          ).then((e) => e.OurteamComponent),
        title: 'SUMMIT - فريقنا',
      },
      {
        path: 'home',
        loadComponent: () =>
          import(
            './../app/core/Components/Pages/blank-layout/teching-tech/teching-tech.component'
          ).then((e) => e.TechingTechComponent),
        title: 'SUMMIT - فلسفتنا التعليمية',
      },
      {
        path: 'home',
        loadComponent: () =>
          import(
            './../app/core/Components/Pages/blank-layout/contact/contact.component'
          ).then((e) => e.ContactComponent),
        title: 'SUMMIT - اتصل بنا',
      },
    ],
  },
  {
    path: '**',
    loadComponent: () =>
      import(
        './../app/core/Components/Shared/not-found/not-found.component'
      ).then((e) => e.NotFoundComponent),
  },
];
