import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { TeamService } from '../../../../services/team.service';

@Component({
  selector: 'app-ourteam',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ourteam.component.html',
  styleUrl: './ourteam.component.scss',
})
export class OurteamComponent {
  constructor(public _Team: TeamService) {}
}
