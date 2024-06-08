import { Component } from '@angular/core';
import { AboutSectionFiveComponent } from '../about/about-section-five/about-section-five.component';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [AboutSectionFiveComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {}
