import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { AboutSectionFiveComponent } from './about-section-five/about-section-five.component';
import { AboutSectionFourComponent } from './about-section-four/about-section-four.component';
import { AboutSectionThreeComponent } from './about-section-three/about-section-three.component';
import { AboutSectionTwoComponent } from './about-section-two/about-section-two.component';
import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';

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
export class AboutComponent {
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
