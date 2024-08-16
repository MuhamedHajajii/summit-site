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
    'assets/new/1.jpg',
    'assets/new/2.jpg',
    'assets/new/3.jpg',
    'assets/new/4.jpg',
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
