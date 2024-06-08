import { Component } from '@angular/core';

@Component({
  selector: 'app-about-section-five',
  standalone: true,
  imports: [],
  templateUrl: './about-section-five.component.html',
  styleUrl: './about-section-five.component.scss',
})
export class AboutSectionFiveComponent {
  Courses = [
    {
      Image_Url: 'assets/Home/courses/1.jpg',
      CourseName: 'Generative AI',
      Course_Description:
        'مدرسة رائدة عبر الإنترنت مصممة خصيصًا للطلاب المصريين الذين يدرسون المنهج الحكومي المصري',
    },
    {
      Image_Url: 'assets/Home/courses/2.jpg',
      CourseName: 'British English',
      Course_Description:
        'مدرسة رائدة عبر الإنترنت مصممة خصيصًا للطلاب المصريين الذين يدرسون المنهج الحكومي المصري',
    },
    {
      Image_Url: 'assets/Home/courses/3.jpg',
      CourseName: 'Programing',
      Course_Description:
        'مدرسة رائدة عبر الإنترنت مصممة خصيصًا للطلاب المصريين الذين يدرسون المنهج الحكومي المصري',
    },
    {
      Image_Url: 'assets/Home/courses/4.jpg',
      CourseName: 'Spanish',
      Course_Description:
        'مدرسة رائدة عبر الإنترنت مصممة خصيصًا للطلاب المصريين الذين يدرسون المنهج الحكومي المصري',
    },
    {
      Image_Url: 'assets/Home/courses/5.jpg',
      CourseName: 'German',
      Course_Description:
        'مدرسة رائدة عبر الإنترنت مصممة خصيصًا للطلاب المصريين الذين يدرسون المنهج الحكومي المصري',
    },
    {
      Image_Url: 'assets/Home/courses/6.jpg',
      CourseName: 'French',
      Course_Description:
        'مدرسة رائدة عبر الإنترنت مصممة خصيصًا للطلاب المصريين الذين يدرسون المنهج الحكومي المصري',
    },
  ];
}
