import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OurVisionService } from '../../../../../services/our-vision.service';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-home-our-vision',
  standalone: true,
  imports: [RouterLink, SlicePipe],
  templateUrl: './home-our-vision.component.html',
  styleUrl: './home-our-vision.component.scss',
})
export class HomeOurVisionComponent {
  constructor(public _OurVision: OurVisionService) {}
}
