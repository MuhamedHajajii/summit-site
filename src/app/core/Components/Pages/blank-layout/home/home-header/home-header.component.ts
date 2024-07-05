import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { HomeVideoComponent } from './home-video/home-video.component';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-header',
  standalone: true,
  imports: [
    HomeVideoComponent,
    NgOptimizedImage,
    RouterLink,
    CarouselModule,
    CommonModule,
  ],
  templateUrl: './home-header.component.html',
  styleUrl: './home-header.component.scss',
})
export class HomeHeaderComponent {
  constructor(private _Renderer2: Renderer2) {}
  @ViewChild('mainSection') mainSection!: ElementRef;
  getHeaderBg(): void {
    this._Renderer2.addClass(
      this.mainSection.nativeElement,
      'secondBackground'
    );
  }

  PlayVideo: boolean = false;
  onPlayVideoClick(): void {
    this.PlayVideo = !this.PlayVideo;
  }
  iFrameFlag: boolean = false;
  iFrameLoad(i: number): void {
    this.iFrameFlag = false;
    console.log('Complete');
  }

  HeaderImages: string[] = [
    '/assets/Home/homeheader/1.jpg',
    '/assets/Home/homeheader/2.jpg',
    '/assets/Home/homeheader/3.jpg',
    '/assets/Home/homeheader/4.jpg',
    '/assets/Home/homeheader/5.jpg',
    '/assets/Home/homeheader/6.jpg',
    '/assets/Home/homeheader/7.jpg',
    '/assets/Home/homeheader/8.jpg',
  ];

  customOptions: OwlOptions = {
    lazyLoad: true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    margin: 15,
    dots: true,
    rtl: true,
    autoplay: true,
    autoplaySpeed: 500,
    navSpeed: 700,
    items: 1,
    // rewind: true,
    nav: false,
  };
}

/*
<div
            class="text-center rounded-4 homevideoParent overflow-hidden d-flex justify-content-center align-items-center"
          >
            <!-- <img
              (load)="iFrameLoad()"
              class="video__Image"
              src="https://lh3.googleusercontent.com/d/1hH0OlUaGvIwTy2X6jDd-C_KEkyS2GWgj"
              referrerpolicy="no-referrer"
              alt="summit online School logo"
            /> -->
            <owl-carousel-o [options]="customOptions">
              <!-- @for (slide of HeaderImages; track slide ; let I = $index) {
              } -->
              <ng-container *ngFor="let slide of HeaderImages">
                <ng-template carouselSlide [id]="slide">
                  <img
                    loading="lazy"
                    decoding="async"
                    data-aos="flip-right"
                    data-aos-duration="1000"
                    class="rounded-3 ratio ratio-16x9 w-100"
                    [height]="450"
                    [src]="slide"
                    [alt]="slide"
                    [title]="slide"
                  />
                </ng-template>
              </ng-container>
            </owl-carousel-o>
            <!-- @if (iFrameFlag) {
            <div
              class="position-absolute top-0 start-0 end-0 bottom-0 w-100 h-100 placeholder Bg-Main"
              role="presentation"
            ></div>
            } -->
            <!-- <div>
              <img
                role="button"
                tabindex="0"
                (click)="onPlayVideoClick()"
                width="150"
                height="150"
                class="position-absolute top-50 start-50 translate-middle"
                ngSrc="./assets/play-video.svg"
                alt="play-video"
              />
            </div> -->
          </div>
*/
