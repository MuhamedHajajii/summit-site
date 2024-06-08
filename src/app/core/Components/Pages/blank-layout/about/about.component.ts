import { AboutSectionFiveComponent } from './about-section-five/about-section-five.component';
import { AboutSectionFourComponent } from './about-section-four/about-section-four.component';
import { AboutSectionThreeComponent } from './about-section-three/about-section-three.component';
import { AboutSectionTwoComponent } from './about-section-two/about-section-two.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    AboutSectionTwoComponent,
    AboutSectionThreeComponent,
    AboutSectionFourComponent,
    AboutSectionFiveComponent,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
