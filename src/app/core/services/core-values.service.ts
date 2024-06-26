import { Injectable } from '@angular/core';
import { Corevalues } from '../interfaces/corevalues';

@Injectable({
  providedIn: 'root',
})
export class CoreValuesService {
  coreValues: Corevalues[] = [
    {
      title: 'الجودة',
      pragraph:
        'نلتزم بتقديم تعليم عالي الجودة يلبي احتياجات وتطلعات جميع طلابنا',
      image_1: 'assets/Home/Core-values/1.svg',
      image_2: 'assets/About/about-section-2/1.svg',
    },
    {
      title: 'التعاون',
      pragraph:
        'نقدر أهمية التعاون ودور المجتمع، ونسعى لتعزيز الروابط بين المتعلمين والمربين وخبراء الصناعة، ',
      image_1: 'assets/Home/Core-values/2.svg',
      image_2: 'assets/About/about-section-2/2.svg',
    },
    {
      title: 'التفوق الأكاديمي',
      pragraph:
        'نسعى لتعزيز التفوق الأكاديمي من خلال برامج تعليمية مبتكرة ومتطورة.',
      image_1: 'assets/Home/Core-values/3.svg',
      image_2: 'assets/About/about-section-2/3.svg',
    },
    {
      title: 'الشفافية',
      pragraph:
        'نلتزم بالشفافية في جميع جوانب عملنا ونتواصل بوضوح وصراحة مع جميع الأطراف المعنية',
      image_1: 'assets/Home/Core-values/4.svg',
      image_2: 'assets/About/about-section-2/4.svg',
    },
    {
      title: 'التنمية المستدامة',
      pragraph:
        'نهدف إلى تحقيق التنمية المستدامة من خلال تعليم مستدام يعزز من قدرات الطلاب على المدى الطويل.',
      image_1: 'assets/Home/Core-values/5.svg',
      image_2: 'assets/About/about-section-2/5.svg',
    },
    {
      title: 'الابتكار',
      pragraph:
        'نشجع الابتكار في أساليب التدريس ونستخدم أحدث التقنيات لتحسين تجربة التعلم عن بُعد',
      image_1: 'assets/Home/Core-values/6.svg',
      image_2: 'assets/About/about-section-2/6.svg',
    },
    {
      title: 'التعلم مدى الحياة',
      pragraph:
        'نحن ندعم السعي وراء المعرفة في كل مرحلة من مراحل الحياة. كما نلتزم بتعزيز ثقافة تقدر التعلم المستمر',
      image_1: 'assets/Home/Core-values/7.svg',
      image_2: 'assets/About/about-section-2/7.svg',
    },
    {
      title: 'التنوع والشمولية',
      pragraph:
        'نؤمن بأهمية التنوع ونحرص على توفير بيئة تعليمية شاملة ترحب بجميع الطلاب من مختلف الخلفيات.',
      image_1: 'assets/Home/Core-values/8.svg',
      image_2: 'assets/About/about-section-2/8.svg',
    },
    {
      title: 'المسؤولية',
      pragraph:
        'نتحمل المسؤولية عن توفير بيئة تعليمية آمنة ومحفزة لجميع طلابنا.',
      image_1: 'assets/Home/Core-values/9.svg',
      image_2: 'assets/About/about-section-2/9.svg',
    },
    {
      title: 'الشفافية',
      pragraph:
        'نلتزم بالشفافية في جميع جوانب عملنا ونتواصل بوضوح وصراحة مع جميع الأطراف المعنية',
      image_1: './assets/Home/Core-values/5.svg',
      image_2: 'assets/About/about-section-2/5.svg',
    },
  ];
}
