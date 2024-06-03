import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-home-about',
  standalone: true,
  imports: [],
  templateUrl: './home-about.component.html',
  styleUrl: './home-about.component.scss',
})
export class HomeAboutComponent {
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
  Images: string[] = [
    'assets/Home/Home-About/1.png',
    'assets/Home/Home-About/2.png',
    'assets/Home/Home-About/3.png',
    'assets/Home/Home-About/4.png',
  ];
}
