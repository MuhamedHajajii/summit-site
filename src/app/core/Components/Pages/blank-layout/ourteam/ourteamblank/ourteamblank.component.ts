import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TeamService } from '../../../../../services/team.service';
import { VideosComponent } from './videos/videos.component';
import { Team } from '../../../../../interfaces/team';

@Component({
  selector: 'app-ourteamblank',
  standalone: true,
  imports: [CommonModule, RouterLink, VideosComponent],
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
  cuurentInstractor!: Team;
  isLightBox: boolean = false;
  toggleLightBox(cuurentInstractor?: Team): void {
    this.isLightBox = !this.isLightBox;
    this.cuurentInstractor = cuurentInstractor as Team;
  }
  stopProp(e: Event): void {
    e.stopPropagation();
  }
}
