import { SummitTeachersFormComponent } from './summit-teachers-form/summit-teachers-form.component';
import { Component } from '@angular/core';
import { SummitCoursesFormComponent } from './summit-courses-form/summit-courses-form.component';
import { SummitStudentsFormComponent } from './summit-students-form/summit-students-form.component';
import { SummitFeedbackFormComponent } from './summit-feedback-form/summit-feedback-form.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-summit-forms',
  standalone: true,
  imports: [
    SummitCoursesFormComponent,
    SummitTeachersFormComponent,
    SummitStudentsFormComponent,
    SummitFeedbackFormComponent,
    RouterOutlet,
  ],
  templateUrl: './summit-forms.component.html',
  styleUrl: './summit-forms.component.scss',
})
export class SummitFormsComponent {}
