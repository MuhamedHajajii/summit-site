import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-team',
  standalone: true,
  imports: [CarouselModule, CommonModule],
  templateUrl: './home-team.component.html',
  styleUrl: './home-team.component.scss',
})
export class HomeTeamComponent {
  slidesStore = [
    {
      ImageUrl: 'assets/Home/Home-Team/1.jpg',
      Instractor_Name: 'جورج امجد',
      Instractor_Job: 'الرئيس التنفيذي لمدرسة summit',
    },
    {
      ImageUrl: 'assets/Home/Home-Team/2.jpg',
      Instractor_Name: 'عبدالرحمن العربي',
      Instractor_Job: 'استشاري التطوير بمدرسه ساميت',
    },
    {
      ImageUrl: 'assets/Home/Home-Team/3.jpg',
      Instractor_Name: 'مايكل ميشيل',
      Instractor_Job: 'مدير الجوده و الاعتماد الاكاديمى',
    },
    {
      ImageUrl: 'assets/Home/Home-Team/4.jpg',
      Instractor_Name: 'ماريان اشرف',
      Instractor_Job: 'مديره الأرشاد الأكاديمى ومسئوله قسم اللغه الألمانيه',
    },
    {
      ImageUrl: 'assets/Home/Home-Team/5.jpg',
      Instractor_Name: 'احمد سراج',
      Instractor_Job: 'مدير تكنولوجيا التعليم',
    },
    {
      ImageUrl: 'assets/Home/Home-Team/6.jpg',
      Instractor_Name: 'تامر أنور',
      Instractor_Job: 'المدير العام لشركة Summit',
    },
    {
      ImageUrl: 'assets/Home/Home-Team/7.jpg',
      Instractor_Name: 'تامر أنور',
      Instractor_Job: 'المدير العام لشركة Summit',
    },
  ];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    margin: 15,
    dots: false,
    rtl: true,
    autoplay: true,
    autoplaySpeed: 500,
    navSpeed: 700,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };
}
