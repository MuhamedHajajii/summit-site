import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-carousel-home-about',
  standalone: true,
  imports: [CarouselModule, CommonModule],
  templateUrl: './carousel-home-about.component.html',
  styleUrl: './carousel-home-about.component.scss',
})
export class CarouselHomeAboutComponent {
  Images: string[] = [
    'assets/Home/Home-About/1.png',
    'assets/Home/Home-About/2.png',
    'assets/Home/Home-About/3.png',
    'assets/Home/Home-About/4.png',
  ];
  @Output() onCloseCarousel: EventEmitter<any> = new EventEmitter();

  toggleLightBox(): void {
    this.onCloseCarousel.emit();
  }
}
