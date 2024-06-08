import { Component } from '@angular/core';

@Component({
  selector: 'app-about-section-three',
  standalone: true,
  imports: [],
  templateUrl: './about-section-three.component.html',
  styleUrl: './about-section-three.component.scss',
})
export class AboutSectionThreeComponent {
  coreValues = [
    {
      title: 'الجودة',
      pragraph:
        'نلتزم بتقديم تعليم عالي الجودة يلبي احتياجات وتطلعات جميع طلابنا',
      image: 'assets/About/about-section-2/1.png',
    },
    {
      title: 'التعاون',
      pragraph:
        'نقدر أهمية التعاون ودور المجتمع، ونسعى لتعزيز الروابط بين المتعلمين والمربين وخبراء الصناعة، ',
      image: 'assets/About/about-section-2/2.png',
    },
    {
      title: 'التفوق الأكاديمي',
      pragraph:
        'نسعى لتعزيز التفوق الأكاديمي من خلال برامج تعليمية مبتكرة ومتطورة.',
      image: 'assets/About/about-section-2/3.png',
    },
    {
      title: 'التعاون',
      pragraph:
        'نعزز روح التعاون بين الطلاب والمعلمين وأولياء الأمور لتحقيق أهدافنا التعليمية المشتركة.',
      image: 'assets/About/about-section-2/4.png',
    },
    {
      title: 'التنمية المستدامة',
      pragraph:
        'نهدف إلى تحقيق التنمية المستدامة من خلال تعليم مستدام يعزز من قدرات الطلاب على المدى الطويل.',
      image: 'assets/About/about-section-2/5.png',
    },
    {
      title: 'الابتكار',
      pragraph:
        'نشجع الابتكار في أساليب التدريس ونستخدم أحدث التقنيات لتحسين تجربة التعلم عن بُعد',
      image: 'assets/About/about-section-2/6.png',
    },
    {
      title: 'التعلم مدى الحياة',
      pragraph:
        'نحن ندعم السعي وراء المعرفة في كل مرحلة من مراحل الحياة. كما نلتزم بتعزيز ثقافة تقدر التعلم المستمر',
      image: 'assets/About/about-section-2/7.png',
    },
    {
      title: 'التنوع والشمولية',
      pragraph:
        'نؤمن بأهمية التنوع ونحرص على توفير بيئة تعليمية شاملة ترحب بجميع الطلاب من مختلف الخلفيات.',
      image: 'assets/About/about-section-2/8.png',
    },
    {
      title: 'المسؤولية',
      pragraph:
        'نتحمل المسؤولية عن توفير بيئة تعليمية آمنة ومحفزة لجميع طلابنا.',
      image: 'assets/About/about-section-2/9.png',
    },
  ];
}
