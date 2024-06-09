import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ourteam',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ourteam.component.html',
  styleUrl: './ourteam.component.scss',
})
export class OurteamComponent {
  Team = [
    {
      ImageUrl: 'assets/Home/Home-Team/1.jpg',
      Instractor_Name: 'جورج امجد',
      Instractor_Job: 'الرئيس التنفيذي لمدرسة summit',
      Instractor_Info: [
        '.حاصل على بكاليريوس الهندسه المدنيه من جامعه الأسكندريه',
        '.استشارى بمشروع دلتا مصر اضخم  مشروع بجمهوريه مصر العربيه لأستصلاح الأراضى الزراعيه',
        '. حاصل على شهادة إدارة التعليم الإلكتروني (Certified E-Learning Manager - CELM).',
        'شهادة تدريب المعلمين في التعليم الافتراضي (Virtual Teacher Training Certification).',
        'شهادة في إدارة المشاريع التعليمية (Educational Project Management Certification).',
        'مدرس mathematics ببعض المدارس الدوليه سابقا.',
      ],
    },
    {
      ImageUrl: 'assets/Home/Home-Team/2.jpg',
      Instractor_Name: 'عبدالرحمن العربي',
      Instractor_Job: 'استشاري التطوير بمدرسه ساميت',
      Instractor_Info: [
        'خريج جامعه علوم اسكندريه قسم بايوكمستري بتقدير امتياز مع مرتبه الشرف',
        'ساهم ف تطوير اكتر من مدرسه اون لاين بدايته من المراحل الاولي وصولا لمراحل متقدمه',
        'مقدم دورات في تدريب المعلمين علي طرق التدريس اعتمادا علي النمط السويدي',
        'خبره في مجال تطوير المدارس الاون لاين 5 سنين',
        'درست لاكتر من ٢٠٠٠ طالب اون لاين واكتر من ١٢٠٠ اوف لاين',
      ],
    },
    {
      ImageUrl: 'assets/Home/Home-Team/3.jpg',
      Instractor_Name: 'مايكل ميشيل',
      Instractor_Job: ' مدير الجوده و الاعتماد الاكاديمى',
      Instractor_Info: [
        'حاصل على ماجستير الترجمه ف اللغه الأسبانيه من كليه الألسن جامعه عين شمس',
        'مساعد سفيرة جمهورية الدومينيكان',
        'business specialist في مايكروسوفت',
        'professional advisor في تومتوم',
        ' ⁠مترجم في معرض السلاح الدولي مُعين من وزارة الدفاع ووزارة الشباب',
      ],
    },
    {
      ImageUrl: 'assets/Home/Home-Team/4.jpg',
      Instractor_Name: 'ماريان اشرف',
      Instractor_Job: 'مديره الأرشاد الأكاديمى ومسئوله قسم اللغه الألمانيه',
      Instractor_Info: [
        'حاصله على ماجستير الترجمه ف اللغه الألمانيه من كليه الألسن جامعه كفر الشيخ',
        'عضو ف لجنه تنظيم اليوم الثقافي الألماني',
        'اخصائيه لدعم لسلسله فنادق ETABE ف الأقصر',
        'عضو ف لجنه تنظيم مهرجان الأقصر للسينيما الأفريقه',
        'مديره حضانه harvest الخاصه',
      ],
    },
    {
      ImageUrl: 'assets/Home/Home-Team/5.jpg',
      Instractor_Name: 'احمد سراج',
      Instractor_Job: 'مدير تكنولوجيا التعليم',
      Instractor_Info: [
        'بكالريوس حاسبات وذكاء اصطناعى جامعة بنها',
        'ITI intensive code camp grad',
        'Software Quality control Engineer at Systems Egypt',
        'Software Quality control Engineer at Banque misr',
      ],
    },
    {
      ImageUrl: 'assets/Home/Home-Team/6.jpg',
      Instractor_Name: 'تامر أنور',
      Instractor_Job: 'المدير العام لشركة Summit',
      Instractor_Info: [
        'باحث دكتوراه، جامعة باكنغهام، المملكة المتحدة',
        'ماجستير في تدريس اللغة الإنجليزية للناطقين بلغات أخرى TESOL، جامعة سندرلاند، المملكة المتحدة',
        'استشاري تعليمي وممثل لمؤسسة الاعتماد الأمريكية Array Global Educational Services',
        'عضو سابق في لجنة الاعتماد AIAA',
        'وكيل و ورئيس قسم ببعض المدارس الدولية سابقاً مؤلف سلسلة كتب “I Write Right',
        'حاصل على CELTA، TESOL، وشهادة Cambridge Train the Trainer',
      ],
    },
    {
      ImageUrl: 'assets/Home/Home-Team/7.jpg',
      Instractor_Name: 'تامر أنور',
      Instractor_Job: 'المدير العام لشركة Summit',
      Instractor_Info: [
        'باحث دكتوراه، جامعة باكنغهام، المملكة المتحدة',
        'ماجستير في تدريس اللغة الإنجليزية للناطقين بلغات أخرى TESOL، جامعة سندرلاند، المملكة المتحدة',
        'استشاري تعليمي وممثل لمؤسسة الاعتماد الأمريكية Array Global Educational Services',
        'عضو سابق في لجنة الاعتماد AIAA',
        'وكيل و ورئيس قسم ببعض المدارس الدولية سابقاً مؤلف سلسلة كتب “I Write Right',
        'حاصل على CELTA، TESOL، وشهادة Cambridge Train the Trainer',
      ],
    },
  ];
}
