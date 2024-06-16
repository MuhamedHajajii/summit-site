import { DOCUMENT } from '@angular/common';
import {
  Component,
  ElementRef,
  Inject,
  PLATFORM_ID,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-blank-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './blank-layout.component.html',
  styleUrl: './blank-layout.component.scss',
})
export class BlankLayoutComponent {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private _Renderer2: Renderer2
  ) {}
  @ViewChild('mainLoading') mainLoading!: ElementRef;
  ngAfterViewInit(): void {
    if (this.document.readyState !== 'loading') {
      this._Renderer2.addClass(this.mainLoading.nativeElement, 'animateHide');
    }
  }
}
