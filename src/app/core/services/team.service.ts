import { Injectable } from '@angular/core';
import { Team } from '../interfaces/team';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  Team: Team[] = [
    {
      ImageUrl: 'assets/Home/Home-Team/1.jpg',
      Instractor_Name: 'جورج أمجد',
      Instractor_Job: 'الرئيس التنفيذي لمدرسة summit',
      Instractor_Info: [
        'حاصل على بكاليريوس الهندسة المدنية من جامعة الإسكندرية',
        'استشاري بمشروع دلتا مصر أضخم مشروعا بجمهورية مصر العربية لاستصلاح الأراضي الزراعية',
        'حاصل على شهادة إدارة التعليم الإلكتروني (Certified E- Learning Manager- CELM)',
        'شهادة تدريب المعلمين في التعليم الافتراضي (Virtual Teacher Training Certification)',
        'شهادة في إدارة المشاريع التعليمية (Educational Project Management Certification)',
        'مدرس mathematics ببعض المدارس الدولية سابقا',
      ],
    },
    {
      ImageUrl: 'assets/Home/Home-Team/2.jpg',
      Instractor_Name: 'عبد الرحمن العربي',
      Instractor_Job: 'استشاري التطوير بمدرسه ساميت',
      Instractor_Info: [
        'خريج جامعة علوم لسكندرية قسم بايوكيمستري بتقدير امتياز مع مرتبه الشرف',
        'ساهم ف تطوير اكتر مدرسه أون لاين بدايته من المراحل الأولى وصولا لمراحل متقدمة',
        'مقدم دورات في تدريب المعلمين علي طرق التدريس اعتمادا علي النمط السويدي',
        'خبره في مجال تطوير المدارس اللون لاين 5 سنين',
        'درست لأكتر من ٢٠٠٠ طالب أون لاين واكترى من ١٢٠٠ أوف لاين',
      ],
    },
    {
      ImageUrl: 'assets/Home/Home-Team/8.jpg',
      Instractor_Name: 'جوزيف رفيق',
      Instractor_Job: 'مسئول قسم اللغة الإنجليزية',
      Instractor_Info: [
        'محاضر بريطاني معتمد من جامعة كامبريدج.',
        'خبرة تفوق 5 سنوات في تدريس اللغة الإنجليزية لغير الناطقين بها.',
        'عمل كمتحدث رسمي ومدرب لغوي في العديد من المؤتمرات الدولية.',
        'مشارك في برامج تطوير المناهج الدراسية بالتعاون مع مؤسسات تعليمية دولية.',
      ],
    },
    {
      ImageUrl: 'assets/Home/Home-Team/3.jpg',
      Instractor_Name: 'مايكل ميشيل',
      Instractor_Job:
        'مدير الجودة والاعتماد الأكاديمي ومسئول قسم اللغة  الأسبانية',
      Instractor_Info: [
        'حاصل على ماجستير الترجمة ف اللغة الأسبانية من كليه الألسن جامعة عين شمس',
        'مساعد سفيرة جمهورية الدومينيكان',
        'business specialist في مايكروسوفت',
        'professional advisor في تومتوم',
        '⁠مترجم في معرض السلاح الدولي معين من وزارة الدفاع ووزارة الشباب',
      ],
    },
    {
      ImageUrl: 'assets/Home/Home-Team/4.jpg',
      Instractor_Name: 'ماريان أشرف',
      Instractor_Job: 'مديره الإرشاد الأكاديمي ومسئوله قسم اللغة الألمانية',
      Instractor_Info: [
        'حاصله على ماجستير الترجمة ف اللغة الألمانية من كليه الألسن جامعة كفر الشيخ',
        'عضو ف لجنة تنظيم اليوم الثقافي الألماني',
        'إخصائيه لدعم لسلسله فنادق ETABE ف الأقصر',
        'عضو ف لجنة تنظيم مهرجان الأقصر للسينيما الأفريقه',
        'مديره حضانة harvest الخاصة',
      ],
    },
    {
      ImageUrl: 'assets/Home/Home-Team/6.jpg',
      Instractor_Name: 'ساره محمد',
      Instractor_Job: 'مسؤول تطوير المدرسين',
      Instractor_Info: [
        'STEAMify academy founder',
        'international certified trainer',
        'STEAM certified',
        '10 years of experience national and international schools',
        'biotechnology graduate',
      ],
    },
    {
      ImageUrl: 'assets/Home/Home-Team/7.jpg',
      Instractor_Name: 'علي كنعان',
      Instractor_Job: 'مسئول قسم البرمجة والحاسب',
      Instractor_Info: [
        'ماستر علوم حاسب من الأكاديمية العربية للعلوم والتكنولوجيا AAST',
        'عضو ورئيس لجان تحكيم ICPC و IOI و ACPC teens',
        'خبرة 10 سنين في تدريب problem solving لكافة الأعمار',
        'خبرة ٥ سنين في إدارة وتطوير عملية إنشاء الحلول البرمجية',
      ],
    },
    {
      ImageUrl: 'assets/Home/Home-Team/5.jpg',
      Instractor_Name: 'أحمد سراج',
      Instractor_Job: 'مدير تكنولوجيا التعليم',
      Instractor_Info: [
        'بكالوريوس حاسبات وذكاء اصطناعي جامعة بنها',
        'ITI intensive code camp grad',
        'Software Quality control Engineer at Systems Egypt',
        'Software Quality control Engineer at Banque misr',
      ],
    },
    {
      ImageUrl: 'assets/Home/Home-Team/6.jpg',
      Instractor_Name: 'هبة معوض',
      Instractor_Job: 'مسؤولة قسم اللغة الفرنسية',
      Instractor_Info: [
        'بكالوريوس حاسبات وذكاء اصطناعي جامعة بنها',
        'private French teacher with  10+ years experience',
        'French teacher at Cardiff modern international school',
        'French teacher at Anglo American semi-international school at new capital city',
        'French teacher at El Masrawya language school',
      ],
    },
  ];
  getAllTeamInfo(): any {}
}
