import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-ourteam',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './ourteam.component.html',
  styleUrl: './ourteam.component.scss',
})
export class OurteamComponent {}
