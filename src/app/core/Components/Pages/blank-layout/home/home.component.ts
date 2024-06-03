import AOS from 'aos';
import { HomeAboutComponent } from './home-about/home-about.component';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { HomeVideoComponent } from './home-video/home-video.component';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeVideoComponent, HomeAboutComponent],
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
        AOS.init();
        AOS.refresh();
      }
    }
  }

  PlayVideo: boolean = false;
  onPlayVideoClick(): void {
    this.PlayVideo = !this.PlayVideo;
  }
}
