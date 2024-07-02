import { NgOptimizedImage } from '@angular/common';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { HomeVideoComponent } from './home-video/home-video.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-header',
  standalone: true,
  imports: [HomeVideoComponent, NgOptimizedImage, RouterLink],
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
  iFrameFlag: boolean = true;
  iFrameLoad(): void {
    this.iFrameFlag = false;
    console.log('Complete');
  }
}
