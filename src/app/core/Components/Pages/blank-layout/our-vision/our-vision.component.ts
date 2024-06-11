import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { OurVisionService } from '../../../../services/our-vision.service';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-our-vision',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './our-vision.component.html',
  styleUrl: './our-vision.component.scss',
})
export class OurVisionComponent {
  constructor(
    public _OurVision: OurVisionService,
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
