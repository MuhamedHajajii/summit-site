import { Component } from '@angular/core';
import { HomeAboutComponent } from './home-about/home-about.component';
import { HomeCorevaluesComponent } from './home-corevalues/home-corevalues.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomtTestimonialComponent } from './homt-testimonial/homt-testimonial.component';
import { HomeCoursesComponent } from './home-courses/home-courses.component';
import { HomeTrainingComponent } from './home-training/home-training.component';
import { HomeTeamComponent } from './home-team/home-team.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HomeHeaderComponent,
    HomeAboutComponent,
    HomeCorevaluesComponent,
    HomtTestimonialComponent,
    HomeCoursesComponent,
    HomeTrainingComponent,
    HomeTeamComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
