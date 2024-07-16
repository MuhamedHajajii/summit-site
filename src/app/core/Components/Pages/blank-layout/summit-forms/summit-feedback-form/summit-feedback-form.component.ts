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
@Component({
  selector: 'app-summit-feedback-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    NgxIntlTelInputModule,
    FormsModule,
    DropdownModule,
  ],
  templateUrl: './summit-feedback-form.component.html',
  styleUrl: './summit-feedback-form.component.scss',
})
export class SummitFeedbackFormComponent {
  startValidation: boolean = false;

  constructor(private _FormsApisService: FormsApisService) {}
  FeedBackForm: FormGroup = new FormGroup({
    'الاسم الكامل': new FormControl(''),
    'البريد اللإلكتروني': new FormControl(''),
    'رقم هاتف': new FormControl(''),
    'نوع البلاغ': new FormControl('', [Validators.required]),
    الموضوع: new FormControl('', [Validators.required]),
    'تفاصيل الشكوي او الاقتراح': new FormControl('', [Validators.required]),
  });
  onFormSubmit(): void {
    this.startValidation = true;
    console.log(this.FeedBackForm);
    if (this.FeedBackForm.valid) {
      this._FormsApisService
        .addFeedBackToSheets(this.FeedBackForm.value)
        .subscribe({
          next: (response: any) => {
            this.startValidation = false;
            this.FeedBackForm.reset();
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
      ${message}\n
      Will be in touch with you ASAP
      `,
      'success'
    ).then(() => {});
  }

  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
}
