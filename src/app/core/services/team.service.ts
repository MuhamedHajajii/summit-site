import { Injectable } from '@angular/core';
import { Team } from '../interfaces/team';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  baseImageUrl: string = 'https://lh3.googleusercontent.com/d/';
  Team: Team[] = [
    {
      ImageUrl: this.baseImageUrl + '1XZuEWJqXHKSpMozRpp-YEDnlUqrW7fQh',
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
      Instractor_VideoUrl:
        'https://www.youtube.com/embed/Elz3WyF3XBY?autoplay=1&loop=1&playlist=Elz3WyF3XBY&si=juBiJcfW13Yxq9gh',
    },
    {
      ImageUrl: this.baseImageUrl + '1JpEwK5EsaTM2mtt_6rvfkwLpsMx5Iqiq',
      Instractor_Name: 'عبد الرحمن العربي',
      Instractor_Job: 'استشاري التطوير بمدرسه ساميت',
      Instractor_Info: [
        'خريج جامعة علوم لسكندرية قسم بايوكيمستري بتقدير امتياز مع مرتبه الشرف',
        'ساهم ف تطوير اكتر مدرسه أون لاين بدايته من المراحل الأولى وصولا لمراحل متقدمة',
        'مقدم دورات في تدريب المعلمين علي طرق التدريس اعتمادا علي النمط السويدي',
        'خبره في مجال تطوير المدارس اللون لاين 5 سنين',
        'درست لأكتر من ٢٠٠٠ طالب أون لاين واكترى من ١٢٠٠ أوف لاين',
      ],
      Instractor_VideoUrl:
        'https://www.youtube.com/embed/Hst0qgJgdDM?autoplay=1&loop=1&playlist=Hst0qgJgdDM&si=7443wzHxBiWsToaA',
    },
    {
      ImageUrl: this.baseImageUrl + '1G23pre38KNuFAV9fTvh2mrAT1I2vddgn',
      Instractor_Name: 'جوزيف رفيق',
      Instractor_Job: 'مسئول قسم اللغة الإنجليزية',
      Instractor_Info: [
        'محاضر بريطاني معتمد من جامعة كامبريدج.',
        'خبرة تفوق 5 سنوات في تدريس اللغة الإنجليزية لغير الناطقين بها.',
        'عمل كمتحدث رسمي ومدرب لغوي في العديد من المؤتمرات الدولية.',
        'مشارك في برامج تطوير المناهج الدراسية بالتعاون مع مؤسسات تعليمية دولية.',
      ],
      Instractor_VideoUrl:
        'https://www.youtube.com/embed/Oi7eEDNNlTQ?autoplay=1&loop=1&playlist=Oi7eEDNNlTQ',
    },
    {
      ImageUrl: this.baseImageUrl + '1JJnk-kQPPhy3QpQjKmdRn6gpe0-2Sr7X',
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
      Instractor_VideoUrl:
        'https://www.youtube.com/embed/UpE9Y9rWRrQ?autoplay=1&loop=1&playlist=UpE9Y9rWRrQ',
    },
    {
      ImageUrl: this.baseImageUrl + '1BJWCCQz_SUe3HgeZ7OiCtFRqeJwUvCLd',
      Instractor_Name: 'ماريان أشرف',
      Instractor_Job: 'مديره الإرشاد الأكاديمي ومسئوله قسم اللغة الألمانية',
      Instractor_Info: [
        'حاصله على ماجستير الترجمة ف اللغة الألمانية من كليه الألسن جامعة كفر الشيخ',
        'عضو ف لجنة تنظيم اليوم الثقافي الألماني',
        'إخصائيه لدعم لسلسله فنادق ETABE ف الأقصر',
        'عضو ف لجنة تنظيم مهرجان الأقصر للسينيما الأفريقه',
        'مديره حضانة harvest الخاصة',
      ],
      Instractor_VideoUrl:
        'https://www.youtube.com/embed/jxO0RVrG18k?autoplay=1&loop=1&playlist=jxO0RVrG18k&si=JsU95AHAP0TsauZd',
    },
    {
      ImageUrl: this.baseImageUrl + '1I_ZQjIKEnmdsRuM9IDiyPv9xyZP5sQsr',
      Instractor_Name: 'ساره محمد',
      Instractor_Job: 'مسؤول تطوير المدرسين',
      Instractor_Info: [
        'STEAMify academy founder',
        'international certified trainer',
        'STEAM certified',
        '10 years of experience national and international schools',
        'biotechnology graduate',
      ],
      Instractor_VideoUrl: '',
    },
    {
      ImageUrl: this.baseImageUrl + '1eM0-6e-jD8Y9ekRt3XnWjnoqXNJaQ91b',
      Instractor_Name: 'علي كنعان',
      Instractor_Job: 'مسئول قسم البرمجة والحاسب',
      Instractor_Info: [
        'ماستر علوم حاسب من الأكاديمية العربية للعلوم والتكنولوجيا AAST',
        'عضو ورئيس لجان تحكيم ICPC و IOI و ACPC teens',
        'خبرة 10 سنين في تدريب problem solving لكافة الأعمار',
        'خبرة ٥ سنين في إدارة وتطوير عملية إنشاء الحلول البرمجية',
      ],
      Instractor_VideoUrl:
        'https://www.youtube.com/embed/ZFW-qMnR1GY?autoplay=1&loop=1&playlist=ZFW-qMnR1GY&si=SNJkpS-Btl4Iqn1B',
    },
    {
      ImageUrl: this.baseImageUrl + '1lb-LjwOzAgfTa72IZggTybC0HIUGegCt',
      Instractor_Name: 'أحمد سراج',
      Instractor_Job: 'مدير تكنولوجيا التعليم',
      Instractor_Info: [
        'بكالوريوس حاسبات وذكاء اصطناعي جامعة بنها',
        'ITI intensive code camp grad',
        'Software Quality control Engineer at Systems Egypt',
        'Software Quality control Engineer at Banque misr',
      ],
      Instractor_VideoUrl:
        'https://www.youtube.com/embed/ML5ItSO7q-w?autoplay=1&loop=1&playlist=ML5ItSO7q-w&si=SNJkpS-Btl4Iqn1B',
    },
    {
      ImageUrl: this.baseImageUrl + '1N7bog-CXeudkSL50Y4iNmy6Q3fgcvG9Z',
      Instractor_Name: 'هبة معوض',
      Instractor_Job: 'مسؤولة قسم اللغة الفرنسية',
      Instractor_Info: [
        'بكالوريوس حاسبات وذكاء اصطناعي جامعة بنها',
        'private French teacher with  10+ years experience',
        'French teacher at Cardiff modern international school',
        'French teacher at Anglo American semi-international school at new capital city',
        'French teacher at El Masrawya language school',
      ],
      Instractor_VideoUrl: '',
    },
  ];
  getAllTeamInfo(): any {}
}
