import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Team } from '../../../../../../interfaces/team';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.scss',
})
export class VideosComponent {
  @Input() cuurentInstractor!: Team;
  constructor(private sanitizer: DomSanitizer) {}
  safeUrl!: SafeResourceUrl;

  ngOnInit(): void {
    if (this.cuurentInstractor.Instractor_VideoUrl) {
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.cuurentInstractor.Instractor_VideoUrl
      );
    }
    console.log(this.safeUrl);
    console.log(this.cuurentInstractor);
  }
}
