import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home-video',
  standalone: true,
  imports: [],
  templateUrl: './home-video.component.html',
  styleUrl: './home-video.component.scss',
})
export class HomeVideoComponent {
  @Output() closeVideo: EventEmitter<any> = new EventEmitter();

  onCloseVideoClick(): void {
    this.closeVideo.emit();
  }
  stopPropegation(e: Event): void {
    e.stopPropagation();
  }
}
