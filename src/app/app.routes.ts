import { AboutComponent } from './core/Components/Pages/blank-layout/about/about.component';
import { CoursesComponent } from './core/Components/Pages/blank-layout/courses/courses.component';
import { HomeComponent } from './core/Components/Pages/blank-layout/home/home.component';
import { Routes } from '@angular/router';
import { OurVisionComponent } from './core/Components/Pages/blank-layout/our-vision/our-vision.component';
import { OurteamComponent } from './core/Components/Pages/blank-layout/ourteam/ourteam.component';
import { ContactComponent } from './core/Components/Pages/blank-layout/contact/contact.component';
import { BlankLayoutComponent } from './core/Components/Pages/blank-layout/blank-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: HomeComponent,
        title: 'SUMMIT - الرئيسية',
      },
      {
        path: 'about',
        component: AboutComponent,
        title: 'SUMMIT - عن الشركة',
      },
      {
        path: 'courses',
        component: CoursesComponent,
        title: 'SUMMIT - كورسات',
      },
      {
        path: 'vision',
        component: OurVisionComponent,
        title: 'SUMMIT - فلسفتنا',
      },
      {
        path: 'ourteam',
        component: OurteamComponent,
        title: 'SUMMIT - فريقنا',
      },
      {
        path: 'contact',
        component: ContactComponent,
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
