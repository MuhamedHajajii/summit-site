import { DOCUMENT, NgOptimizedImage } from '@angular/common';
import {
  Component,
  ElementRef,
  Inject,
  PLATFORM_ID,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { HomeVideoComponent } from './home-video/home-video.component';

@Component({
  selector: 'app-home-header',
  standalone: true,
  imports: [HomeVideoComponent, NgOptimizedImage],
  templateUrl: './home-header.component.html',
  styleUrl: './home-header.component.scss',
})
export class HomeHeaderComponent {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object,
    private _Renderer2: Renderer2
  ) {}
  // ngOnInit() {
  //   if (this.document.readyState !== 'loading') {
  //     setTimeout(() => {
  //       this.getHeaderBg();
  //     }, 1500);
  //   }
  // }
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
}
