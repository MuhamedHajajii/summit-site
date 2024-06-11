import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Corevalues } from '../../../../../interfaces/corevalues';
import { CoreValuesService } from '../../../../../services/core-values.service';

@Component({
  selector: 'app-home-corevalues',
  standalone: true,
  imports: [CarouselModule, RouterModule, CommonModule],
  templateUrl: './home-corevalues.component.html',
  styleUrl: './home-corevalues.component.scss',
})
export class HomeCorevaluesComponent {
  constructor(public _coreValues: CoreValuesService) {}
  customOptions: OwlOptions = {
    lazyLoad: true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 1000,
    margin: 10,
    navSpeed: 700,
    rtl: true,
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
}
