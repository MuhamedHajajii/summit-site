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
  selector: 'app-summit-teachers-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    NgxIntlTelInputModule,
    FormsModule,
    DropdownModule,
    RadioButtonModule,
  ],
  templateUrl: './summit-teachers-form.component.html',
  styleUrl: './summit-teachers-form.component.scss',
})
export class SummitTeachersFormComponent {
  startValidation: boolean = false;
  cv!: File;
  Gender: string[] = ['ولد', 'بنت'];
  educational_program: string[] = ['عربى', 'لغات'];
  constructor(private _FormsApisService: FormsApisService) {}
  TeachersForm: FormGroup = new FormGroup({
    'الاسم الكامل': new FormControl('', [Validators.required]),
    'تاريخ الميلاد': new FormControl('', [Validators.required]),
    'البريد اللإلكتروني': new FormControl('', [Validators.required]),
    'رقم الواتساب': new FormControl('', [Validators.required]),
    'مستوى المؤهل': new FormControl('', [Validators.required]),
    'المؤهل الأكاديمي': new FormControl('', [Validators.required]),
    'الماده التى يتم تدريسها': new FormControl('', [Validators.required]),
    'سنوات الخبرة في التدريس': new FormControl('', [Validators.required]),
    'المراحل الدراسية التي تم تدريسها': new FormControl('', [
      Validators.required,
    ]),
    'اللغات التي تستطيع التدريس بها': new FormControl('', [
      Validators.required,
    ]),
    'التدريب المهني والشهادات': new FormControl('', [Validators.required]),
    'الراتب المتوقع': new FormControl('', [Validators.required]),
    ملاحظات: new FormControl(''),
  });
  onFormSubmit(cvInput: HTMLInputElement): void {
    this.startValidation = true;
    if (this.TeachersForm.valid && cvInput.files && cvInput.files.length > 0) {
      const formData = new FormData();
      Object.keys(this.TeachersForm.value).forEach((key) => {
        formData.append(key, this.TeachersForm.get(key)?.value);
      });
      formData.append('cvFile', cvInput.files[0]);
      formData.append('cvFileMimeType', cvInput.files[0].type);
      formData.append('cvFileName', cvInput.files[0].name);

      this._FormsApisService.addTeacherToSheets(formData).subscribe({
        next: (response: any) => {
          this.startValidation = false;
          this.TeachersForm.reset();
          this.alertWithSuccess(response.message);
        },
        error: (err) => {
          console.error(err);
        },
      });
    }
  }

  onFileChange(e: any): void {
    console.log(e);
    if (e.target.files.length > 0) {
      this.cv = e.target.files[0];
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
