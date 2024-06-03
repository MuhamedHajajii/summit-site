import { Component } from '@angular/core';
import { HomeAboutComponent } from './home-about/home-about.component';
import { HomeCorevaluesComponent } from './home-corevalues/home-corevalues.component';
import { HomeHeaderComponent } from './home-header/home-header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeHeaderComponent, HomeAboutComponent, HomeCorevaluesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
