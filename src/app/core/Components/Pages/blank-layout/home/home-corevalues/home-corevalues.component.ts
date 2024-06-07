import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import AOS from 'aos';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Corevalues } from '../../../../../interfaces/corevalues';

@Component({
  selector: 'app-home-corevalues',
  standalone: true,
  imports: [CarouselModule, RouterModule, CommonModule],
  templateUrl: './home-corevalues.component.html',
  styleUrl: './home-corevalues.component.scss',
})
export class HomeCorevaluesComponent {
  coreValues: Corevalues[] = [
    {
      title: 'الجودة',
      pragraph:
        'نلتزم بتقديم تعليم عالي الجودة يلبي احتياجات وتطلعات جميع طلابنا',
      image: './assets/Home/Core-values/1.png',
    },
    {
      title: 'التعاون',
      pragraph:
        'نقدر أهمية التعاون ودور المجتمع، ونسعى لتعزيز الروابط بين المتعلمين والمربين وخبراء الصناعة، ',
      image: './assets/Home/Core-values/2.png',
    },
    {
      title: 'التفوق الأكاديمي',
      pragraph:
        'نسعى لتعزيز التفوق الأكاديمي من خلال برامج تعليمية مبتكرة ومتطورة.',
      image: './assets/Home/Core-values/3.png',
    },
    {
      title: 'التعاون',
      pragraph:
        'نعزز روح التعاون بين الطلاب والمعلمين وأولياء الأمور لتحقيق أهدافنا التعليمية المشتركة.',
      image: './assets/Home/Core-values/4.png',
    },
    {
      title: 'التنمية المستدامة',
      pragraph:
        'نهدف إلى تحقيق التنمية المستدامة من خلال تعليم مستدام يعزز من قدرات الطلاب على المدى الطويل.',
      image: './assets/Home/Core-values/5.png',
    },
    {
      title: 'الابتكار',
      pragraph:
        'نشجع الابتكار في أساليب التدريس ونستخدم أحدث التقنيات لتحسين تجربة التعلم عن بُعد',
      image: './assets/Home/Core-values/6.png',
    },
    {
      title: 'التعلم مدى الحياة',
      pragraph:
        'نحن ندعم السعي وراء المعرفة في كل مرحلة من مراحل الحياة. كما نلتزم بتعزيز ثقافة تقدر التعلم المستمر',
      image: './assets/Home/Core-values/7.png',
    },
    {
      title: 'التنوع والشمولية',
      pragraph:
        'نؤمن بأهمية التنوع ونحرص على توفير بيئة تعليمية شاملة ترحب بجميع الطلاب من مختلف الخلفيات.',
      image: './assets/Home/Core-values/8.png',
    },
    {
      title: 'المسؤولية',
      pragraph:
        'نتحمل المسؤولية عن توفير بيئة تعليمية آمنة ومحفزة لجميع طلابنا.',
      image: './assets/Home/Core-values/9.png',
    },
    {
      title: 'الشفافية',
      pragraph:
        'نلتزم بالشفافية في جميع جوانب عملنا ونتواصل بوضوح وصراحة مع جميع الأطراف المعنية',
      image: './assets/Home/Core-values/10.png',
    },
  ];
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.document.readyState !== 'loading') {
        AOS.init();
        AOS.refresh();
      }
    }
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 500,
    margin: 10,
    navSpeed: 700,
    rtl: true,
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
