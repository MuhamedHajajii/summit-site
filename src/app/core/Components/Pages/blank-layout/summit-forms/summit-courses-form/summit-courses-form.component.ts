import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

import {
  CountryISO,
  NgxIntlTelInputModule,
  PhoneNumberFormat,
  SearchCountryField,
} from 'ngx-intl-tel-input';
import Swal from 'sweetalert2';
import { FormsApisService } from '../../../../../services/forms-apis.service';
import { RadioButtonModule } from 'primeng/radiobutton';

@Component({
  selector: 'app-summit-courses-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    NgxIntlTelInputModule,
    FormsModule,
    DropdownModule,
    RadioButtonModule,
  ],
  templateUrl: './summit-courses-form.component.html',
  styleUrl: './summit-courses-form.component.scss',
})
export class SummitCoursesFormComponent {
  startValidation: boolean = false;
  Courses: string[] = [
    'British English',
    'German',
    'Spanish',
    'French',
    'ذكاء اصطناعى',
    'برمجه',
  ];
  Gender: string[] = ['ولد', 'بنت'];
  educational_program: string[] = ['عربى', 'لغات'];
  constructor(private _FormsApisService: FormsApisService) {}
  CoursesForm: FormGroup = new FormGroup({
    'الاسم الكامل': new FormControl('', [Validators.required]),
    'تاريخ الميلاد': new FormControl('', [Validators.required]),
    الجنس: new FormControl('', [Validators.required]),
    'اسم ولي الأمر': new FormControl('', [Validators.required]),
    'رقم الواتساب': new FormControl('', [Validators.required]),
    الكورس: new FormControl('', [Validators.required]),
    ملاحظات: new FormControl(''),
  });
  onFormSubmit(): void {
    this.startValidation = true;
    console.log(this.CoursesForm.value);
    if (this.CoursesForm.valid) {
      this._FormsApisService
        .addCourseEnrollBackToSheets(this.CoursesForm.value)
        .subscribe({
          next: (response: any) => {
            this.startValidation = false;
            this.CoursesForm.reset();
            this.alertWithSuccess(response.message);
          },
          error: (err) => {
            console.log(err);
          },
        });
    }
  }

  alertWithSuccess(message: string) {
    Swal.fire(
      "Summit' Says Thank you...",
      `
      ${message}
      Will be in touch with you ASAP
      `,
      'success'
    ).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
}
