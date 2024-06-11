import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { HomeAboutComponent } from './home-about/home-about.component';
import { HomeCorevaluesComponent } from './home-corevalues/home-corevalues.component';
import { HomeCoursesComponent } from './home-courses/home-courses.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeOurVisionComponent } from './home-our-vision/home-our-vision.component';
import { HomeTeamComponent } from './home-team/home-team.component';
import { HomeTestimonialComponent } from './home-testimonial/homt-testimonial.component';
import { HomeTrainingComponent } from './home-training/home-training.component';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HomeHeaderComponent,
    HomeAboutComponent,
    HomeCorevaluesComponent,
    HomeTestimonialComponent,
    HomeCoursesComponent,
    HomeTrainingComponent,
    HomeTeamComponent,
    HomeOurVisionComponent,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.document.readyState !== 'loading') {
        this.loadAOS();
      } else {
        this.document.addEventListener('DOMContentLoaded', () =>
          this.loadAOS()
        );
      }
    }
  }

  private async loadAOS() {
    const { default: AOS } = await import('aos');
    AOS.init();
    AOS.refresh();
  }
  showComponents: boolean = false;

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (window.scrollY > 120) {
      this.showComponents = true;
    } else {
      this.showComponents = false;
    }
  }
}
