import { NgOptimizedImage } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-home-about',
  standalone: true,
  imports: [GalleriaModule, ButtonModule, RouterLink, NgOptimizedImage],
  templateUrl: './home-about.component.html',
  styleUrl: './home-about.component.scss',
})
export class HomeAboutComponent {
  value = 200;
  Images: string[] = [
    'assets/Home/Home-About/1.webp',
    'assets/Home/Home-About/2.webp',
    'assets/Home/Home-About/3.webp',
    'assets/Home/Home-About/4.webp',
  ];
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
