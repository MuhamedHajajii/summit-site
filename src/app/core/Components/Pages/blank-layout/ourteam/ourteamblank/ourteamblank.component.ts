import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TeamService } from '../../../../../services/team.service';

@Component({
  selector: 'app-ourteamblank',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './ourteamblank.component.html',
  styleUrl: './ourteamblank.component.scss',
})
export class OurteamblankComponent {
  constructor(
    public _Team: TeamService,
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
