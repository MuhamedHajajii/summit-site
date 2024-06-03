import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-blank-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './blank-navbar.component.html',
  styleUrl: './blank-navbar.component.scss'
})
export class BlankNavbarComponent {

}
