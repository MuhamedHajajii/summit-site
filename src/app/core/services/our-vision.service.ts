import { Injectable } from '@angular/core';
import { OurVision } from '../interfaces/our-vision';

@Injectable({
  providedIn: 'root',
})
export class OurVisionService {
  Visions: OurVision = {
    Seciton_image: 'assets/our-vision/1.jpg',
    Seciton_Title: 'وفلسفتنا في التعليم',
    Section_Description:
      ' في ساميت، ندرك أهمية إبقاء المتعلمين مندمجين ومتفاعلين في بيئة التعلم عبر الإنترنت؛ ولتحقيق ذلك نستخدم مجموعة متنوعة من الاستراتيجيات والأدوات والموارد التي تعزز التعلم النشط والتعاون والتفاعل بين طلابنا منها:',
    content: [
      {
        Title: 'التعلم المتمحور حول الطالب:',
        Description:
          'نؤمن بأن كل طالب فريد من نوعه، لذا نركز على تلبية احتياجاتهم الفردية من خلال أساليب تعليمية مخصصة تشجع على التفكير النقدي والإبداعي.',
        Icon: 'fa-regular fa-bookmark',
        Image: 'assets/new/1.jpg',
      },
      {
        Title: 'التعلم مدى الحياة:',
        Description:
          'نسعى إلى غرس حب التعلم في نفوس طلابنا، مما يساعدهم على الاستمرار في اكتساب المعرفة والمهارات طوال حياتهم.',
        Icon: 'fa-solid fa-book-open-reader',
        Image: 'assets/new/2.jpg',
      },
      {
        Title: 'التعليم الشامل:',
        Description:
          'نلتزم بتوفير بيئة تعليمية شاملة تدعم جميع الطلاب، بما في ذلك ذوو الاحتياجات الخاصة، من خلال توفير موارد وأدوات تعليمية متخصصة.',
        Icon: 'fa-solid fa-shuffle',
        Image: 'assets/new/3.jpg',
      },
      {
        Title: 'التكامل بين التكنولوجيا والتعليم:',
        Description:
          'ندمج أحدث التقنيات في مناهجنا التعليمية لتعزيز تجربة التعلم ع بُعد وضمان تفاعل الطلاب بشكل فعّال وممتع.',
        Icon: 'fa-solid fa-handshake-angle',
        Image: 'assets/new/4.jpg',
      },
      {
        Title: 'التعليم القائم على المشاريع:',
        Description:
          'نشجع الطلاب على الانخراط في مشاريع تعليمية عملية تساعدهم على تطبيق ما يتعلمونه في سياقات واقعية، مما يعزز فهمهم العميق للمفاهيم الدراسية.',
        Icon: 'fa-solid fa-screwdriver-wrench',
        Image: 'assets/new/5.jpg',
      },
      {
        Title: 'التعليم القائم على القيم:',
        Description:
          'نركز على تعليم القيم الأخلاقية والاجتماعية، مثل الاحترا والتعاون والمثابرة، لضمان تطوير طلاب مسؤولين ومواطنين عالميين واعون.',
        Icon: 'fa-solid fa-book-open-reader',
        Image: 'assets/new/6.jpg',
      },
      {
        Title: 'التعاون بين المدرسة والأسرة:',
        Description:
          'نؤمن بأن الشراكة بين المدرسة والأسرة أمر حيوي لنجاح الطلاب،  لذا نحرص على بناء جسور تواصل فعّالة مع أولياء الأمور ودعمهم في رحلتهم التعليمية.',
        Icon: 'fa-solid fa-heart-pulse',
        Image: 'assets/new/1.jpg',
      },
      {
        Title: 'التعليم متعدد الثقافات:',
        Description:
          'نحتضن التنوع الثقافي ونشجع طلابنا على فهم وتقدير الثقافات المختلفة، مما يساعدهم على أن يصبحوا مواطنين عالميين متفتحين  وواعون.',
        Icon: 'fa-solid fa-heart-pulse',
        Image: 'assets/new/2.jpg',
      },
    ],
  };
}
