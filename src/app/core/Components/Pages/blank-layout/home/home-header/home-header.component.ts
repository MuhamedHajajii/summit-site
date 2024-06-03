import { HomeVideoComponent } from './home-video/home-video.component';
import AOS from 'aos';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home-header',
  standalone: true,
  imports: [HomeVideoComponent],
  templateUrl: './home-header.component.html',
  styleUrl: './home-header.component.scss',
})
export class HomeHeaderComponent {
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
