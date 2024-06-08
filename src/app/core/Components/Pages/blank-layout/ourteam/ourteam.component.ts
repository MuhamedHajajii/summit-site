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
      Instractor_Name: 'شيرين زهران',
      Instractor_Job: 'مديرة مدرسه اليمن الإلكترونية',
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
      ImageUrl: 'assets/Home/Home-Team/2.jpg',
      Instractor_Name: 'هناء الببلاوي',
      Instractor_Job: 'مديرة مدرسة EIS',
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
      ImageUrl: 'assets/Home/Home-Team/3.jpg',
      Instractor_Name: 'نورا أبو جازية',
      Instractor_Job: 'مديرة تطوير الأعمال',
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
      ImageUrl: 'assets/Home/Home-Team/4.jpg',
      Instractor_Name: 'احمد عبدالمقصود',
      Instractor_Job: 'الرئيس التنفيذي لشركة Amber & Oak',
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
      ImageUrl: 'assets/Home/Home-Team/5.jpg',
      Instractor_Name: 'محمد شلتوت',
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
