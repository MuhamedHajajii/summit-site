import { ButtonModule } from 'primeng/button';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import AOS from 'aos';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-home-about',
  standalone: true,
  imports: [GalleriaModule, ButtonModule],
  templateUrl: './home-about.component.html',
  styleUrl: './home-about.component.scss',
})
export class HomeAboutComponent {
  value = 200;
  Images: string[] = [
    'assets/Home/Home-About/1.png',
    'assets/Home/Home-About/2.png',
    'assets/Home/Home-About/3.png',
    'assets/Home/Home-About/4.png',
  ];

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.document.readyState !== 'loading') {
        AOS.init();
        AOS.refresh();
      }
    }
  }
  isLightBoxOpen: boolean = false;
  toggleLightBox(): void {
    this.isLightBoxOpen = !this.isLightBoxOpen;
  }
  stopProp(e: Event): void {
    e.stopPropagation();
  }
  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];
}
