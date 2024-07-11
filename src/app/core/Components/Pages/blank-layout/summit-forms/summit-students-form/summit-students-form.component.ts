import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-summit-students-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './summit-students-form.component.html',
  styleUrl: './summit-students-form.component.scss',
})
export class SummitStudentsFormComponent {
  startValidation: boolean = false;
  Academic_level: string[] = [
    'K.G. 1',
    'K.G. 2',
    'الأول الأبتدائى',
    'الثانى الأبتدائى',
    'الثالث الأبتدائى',
    'الرابع الأبتدائى',
    'الخامس الأبتدائى',
    'السادس الأبتدائى',
    'الأول الأعدادى',
    'الثانى الأعدادى',
    'الثالث الأعدادى',
  ];
  educational_program: string[] = ['عربى', 'لغات'];
  constructor(private _HttpClient: HttpClient) {}
  StudentsForm: FormGroup = new FormGroup({
    'الاسم الكامل': new FormControl('', [Validators.required]),
    'تاريخ الميلاد': new FormControl('', [Validators.required]),
    الجنس: new FormControl('', [Validators.required]),
    'اسم ولي الأمر': new FormControl('', [Validators.required]),
    'رقم هاتف ولي الأمر': new FormControl('', [Validators.required]),
    'المستوى الدراسي': new FormControl('', [Validators.required]),
    'المنهج الدراسى': new FormControl('', [Validators.required]),
  });
  onFormSubmit(): void {
    this.startValidation = true;
    console.log(this.StudentsForm.value);
    if (this.StudentsForm.valid) {
      this._HttpClient
        .post(
          `https://script.google.com/macros/s/AKfycbwksjQA7y--UG-LDNjCMWNhBKnQa0nGewMYdeKPZWw_OziD3XQVgTQafG9ofLGN42y9/exec`,
          JSON.stringify(this.StudentsForm.value)
        )
        .subscribe({
          next: (response: any) => {
            this.startValidation = false;
            this.StudentsForm.reset();
            console.log(response);
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
    ).then(() => {});
  }
}
