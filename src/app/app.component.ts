import { Component } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';
import { CoreModule } from './core/core.module';
import { Meta, Title } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs';
interface RouteData {
  title?: string;
  description?: string;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CoreModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        mergeMap((route) => route.data)
      )
      .subscribe((data) => {
        this.titleService.setTitle(
          data['title'] || 'SUMMIT Online School - ساميت اونلاين سكول'
        );
        this.metaService.updateTag({
          name: 'description',
          content:
            data['description'] ||
            'تقدم الشركة خدماتها و تساعد الأفراد من مختلف الأعمار في تحقيق رؤيتهم بتوفير تعليم وتدريب عالي الجودة  مقر الشركة في الرياض بالمملكة العربية السعودية',
        });
      });
  }
}
