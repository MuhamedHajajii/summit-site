import { Component } from '@angular/core';
import { CoreValuesService } from '../../../../../services/core-values.service';
import { SlicePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-section-three',
  standalone: true,
  imports: [SlicePipe, RouterLink],
  templateUrl: './about-section-three.component.html',
  styleUrl: './about-section-three.component.scss',
})
export class AboutSectionThreeComponent {
  constructor(public _coreValues: CoreValuesService) {}
}
