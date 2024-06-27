import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import(
        './core/Components/Pages/blank-layout/blank-layout.component'
      ).then((e) => e.BlankLayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import(
            './../app/core/Components/Pages/blank-layout/home/home.component'
          ).then((e) => e.HomeComponent),
        data: {
          title: 'SUMMIT Online School - ساميت اونلاين سكول',
          description:
            'تقدم الشركة خدماتها و تساعد الأفراد من مختلف الأعمار في تحقيق رؤيتهم بتوفير تعليم وتدريب عالي الجودة مقر الشركة في الرياض بالمملكة العربية السعودية نحن ملتزمون بتقديم تعليم عالي الجودة',
        },
      },
      {
        path: 'about',
        loadComponent: () =>
          import(
            './../app/core/Components/Pages/blank-layout/about/about.component'
          ).then((e) => e.AboutComponent),
        data: {
          title: 'SUMMIT - عن الشركة',
          description:
            'نحن ملتزمون بتقديم تعليم عالي الجودة يتماشى مع متطلبات المنهج المصري الرسمي مع توفير بيئة تعليمية متقدمة ومتكاملة تتيح للطلاب تحقيق أقصى إمكاناتهم',
        },
      },
      {
        path: 'courses',
        loadComponent: () =>
          import(
            './../app/core/Components/Pages/blank-layout/courses/courses.component'
          ).then((e) => e.CoursesComponent),
        data: {
          title: 'SUMMIT - كورسات',
          description:
            'أفضل المنصات التعليمية التي تستخدم لتدريس المناهج المختلفة Generative AI British English Programing Spanish German French',
        },
      },
      {
        path: 'vision',
        loadComponent: () =>
          import(
            './../app/core/Components/Pages/blank-layout/our-vision/our-vision.component'
          ).then((e) => e.OurVisionComponent),
        data: {
          title: 'SUMMIT - فلسفتنا',
          description:
            'ندرك أهمية إبقاء المتعلمين مندمجين ومتفاعلين في بيئة التعلم عبر الإنترنت',
        },
      },
      {
        path: 'ourteam',
        loadComponent: () =>
          import(
            './../app/core/Components/Pages/blank-layout/ourteam/ourteam.component'
          ).then((e) => e.OurteamComponent),
        data: {
          title: 'SUMMIT - فريقنا',
          description:
            'استشاري التطوير بمدرسه ساميت عبد الرحمن العربي الرئيس التنفيذي لمدرسة ساميت جورج أمجد',
        },
        children: [
          {
            path: '',
            loadComponent: () =>
              import(
                '../app/core/Components/Pages/blank-layout/ourteam/ourteamblank/ourteamblank.component'
              ).then((e) => e.OurteamblankComponent),
            data: {
              title: 'SUMMIT - join us',
              description:
                'استشاري التطوير بمدرسه ساميت عبد الرحمن العربي الرئيس التنفيذي لمدرسة ساميت جورج أمجد',
            },
          },
          {
            path: 'joinus',
            loadComponent: () =>
              import(
                '../app/core/Components/Pages/blank-layout/ourteam/joinusform/joinusform.component'
              ).then((e) => e.JoinusformComponent),
            data: {
              title: 'SUMMIT - join us',
              description:
                'استشاري التطوير بمدرسه ساميت عبد الرحمن العربي الرئيس التنفيذي لمدرسة ساميت جورج أمجد',
            },
          },
        ],
      },
      {
        path: 'joinus',
        loadComponent: () =>
          import(
            './../app/core/Components/Pages/blank-layout/forms/teachers-form/teachers-form.component'
          ).then((e) => e.TeachersFormComponent),
        data: {
          title: 'SUMMIT - انضم الينا',
          description: 'الرياض المملكه العربيه السعوديه +966582009746',
        },
      },
      {
        path: 'students',
        loadComponent: () =>
          import(
            './../app/core/Components/Pages/blank-layout/forms/students-form/students-form.component'
          ).then((e) => e.StudentsFormComponent),
        data: {
          title: 'SUMMIT - انضم الينا',
          description: 'الرياض المملكه العربيه السعوديه +966582009746',
        },
      },
      {
        path: 'comments',
        loadComponent: () =>
          import(
            './../app/core/Components/Pages/blank-layout/forms/feedback-form/feedback-form.component'
          ).then((e) => e.FeedbackFormComponent),
        data: {
          title: 'SUMMIT - انضم الينا',
          description: 'الرياض المملكه العربيه السعوديه +966582009746',
        },
      },
      {
        path: 'contact',
        loadComponent: () =>
          import(
            './../app/core/Components/Pages/blank-layout/contact/contact.component'
          ).then((e) => e.ContactComponent),
        data: {
          title: 'SUMMIT - اتصل بنا',
          description: 'الرياض المملكه العربيه السعوديه +966582009746',
        },
      },
    ],
  },
  {
    path: '**',
    loadComponent: () =>
      import(
        './../app/core/Components/Shared/not-found/not-found.component'
      ).then((e) => e.NotFoundComponent),
  },
];
