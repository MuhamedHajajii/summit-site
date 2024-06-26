import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CountUpModule } from 'ngx-countup';

@Component({
  selector: 'app-home-testimonial',
  standalone: true,
  imports: [CommonModule, CountUpModule],
  templateUrl: './homt-testimonial.component.html',
  styleUrl: './homt-testimonial.component.scss',
})
export class HomeTestimonialComponent {
  constructor() {}
}
