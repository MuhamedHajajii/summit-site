import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-home-training',
  standalone: true,
  imports: [GalleriaModule, ButtonModule, RouterLink],
  templateUrl: './home-training.component.html',
  styleUrl: './home-training.component.scss',
})
export class HomeTrainingComponent {
  value = 200;
  Images: string[] = [
    'assets/Home/Home-Training/1.jpg',
    'assets/Home/Home-Training/2.jpg',
    'assets/Home/Home-Training/3.jpg',
    'assets/Home/Home-Training/4.jpg',
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
