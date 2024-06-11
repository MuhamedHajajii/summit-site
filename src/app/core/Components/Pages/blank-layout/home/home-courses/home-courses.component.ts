import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-courses',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home-courses.component.html',
  styleUrl: './home-courses.component.scss',
})
export class HomeCoursesComponent {
  Courses = [
    {
      Image_Url: 'assets/Home/courses/2.jpg',
      CourseName: 'British English',
      Course_Description:
        'مدرسة رائدة عبر الإنترنت مصممة خصيصًا للطلاب المصريين الذين يدرسون المنهج الحكومي المصري',
    },
    {
      Image_Url: 'assets/Home/courses/1.jpg',
      CourseName: 'Generative AI',
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
      CourseName: 'German',
      Course_Description:
        'مدرسة رائدة عبر الإنترنت مصممة خصيصًا للطلاب المصريين الذين يدرسون المنهج الحكومي المصري',
    },
    {
      Image_Url: 'assets/Home/courses/5.jpg',
      CourseName: 'Spanish',
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
