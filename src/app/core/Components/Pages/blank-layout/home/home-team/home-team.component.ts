import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { TeamService } from '../../../../../services/team.service';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
import { Team } from '../../../../../interfaces/team';
import { VideosComponent } from '../../ourteam/ourteamblank/videos/videos.component';

@Component({
  selector: 'app-home-team',
  standalone: true,
  imports: [
    CarouselModule,
    CommonModule,
    TooltipModule,
    ButtonModule,
    VideosComponent,
  ],
  templateUrl: './home-team.component.html',
  styleUrl: './home-team.component.scss',
})
export class HomeTeamComponent {
  constructor(public _Team: TeamService) {}
  customOptions: OwlOptions = {
    lazyLoad: true,
    loop: true,
    mouseDrag: true,

    touchDrag: true,
    pullDrag: true,
    margin: 15,
    dots: false,
    rtl: true,
    autoplay: true,
    autoplaySpeed: 500,
    navSpeed: 700,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };
  isToggleLightBox: boolean = false;
  currentSlide!: Team;
  clickedImage(clickedImage: Team): void {
    this.currentSlide = clickedImage;
    console.log(clickedImage.Instractor_Name);
  }
  toggleLightBox(): void {
    this.isToggleLightBox = !this.isToggleLightBox;
  }
}
