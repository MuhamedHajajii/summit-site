import {
  Component,
  ElementRef,
  HostListener,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-blank-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './blank-navbar.component.html',
  styleUrl: './blank-navbar.component.scss',
})
export class BlankNavbarComponent {
  constructor(private _Renderer2: Renderer2, private router: Router) {}
  @ViewChild('navbarUL') navbarUL!: ElementRef;
  @ViewChild('NavBar', { static: true }) NavBar!: ElementRef;
  CloseNavBar(): void {
    if (this.navbarUL.nativeElement.classList.contains('show')) {
      this._Renderer2.removeClass(this.navbarUL.nativeElement, 'show');
    }
  }
  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (this.router.url === '/') {
      if (scrollY >= 500) {
        this._Renderer2.addClass(this.NavBar.nativeElement, 'Bg-Main');
      } else {
        this._Renderer2.removeClass(this.NavBar.nativeElement, 'Bg-Main');
      }
    }
  }
}
