import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { AboutSectionFiveComponent } from '../about/about-section-five/about-section-five.component';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [AboutSectionFiveComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
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
}
