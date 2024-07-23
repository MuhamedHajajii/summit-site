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
import { NgxSpinnerService } from 'ngx-spinner';
import { RadioButtonModule } from 'primeng/radiobutton';
import Swal from 'sweetalert2';
import { FormsApisService } from '../../../../../services/forms-apis.service';
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
  SearchCountryField = SearchCountryField;

  CountryISO = CountryISO;

  PhoneNumberFormat = PhoneNumberFormat;

  startValidation: boolean = false;

  cv!: File;

  Gender: string[] = ['ولد', 'بنت'];

  educational_program: string[] = ['عربى', 'لغات'];

  TeachersForm: FormGroup = new FormGroup({
    Full_Name: new FormControl('', [Validators.required]),
    Birth_Date: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.required]),
    WhatsappNumber: new FormControl('', [Validators.required]),
    Subject_Taught: new FormControl('', [Validators.required]),
    Educational_Stages_Taught: new FormControl('', [Validators.required]),
    Expected_Salary: new FormControl('', [Validators.required]),
    Notes: new FormControl(''),
  });

  constructor(
    private _FormsApisService: FormsApisService,
    private _NgxSpinnerService: NgxSpinnerService
  ) {}
  onFormSubmit(cvInput: HTMLInputElement): void {
    this.startValidation = true;
    if (this.TeachersForm.valid && cvInput.files && cvInput.files.length > 0) {
      const formData = new FormData();
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

  alertWithSuccess(message: string) {
    Swal.fire({
      text: `${message},  Summit will be in touch with you ASAP`,
      animation: true,
      heightAuto: false,
      icon: 'success',
      title: 'Summit Career',
      didClose() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
    });
  }

  /**=================================== */
  /**=================================== */
  /**=================================== */

  handle(CV?: any): void {
    this.startValidation = true;
    if (this.TeachersForm.valid && CV.value && CV.value.length > 0) {
      if (CV) {
        this._NgxSpinnerService.show();
      }

      let url =
        'https://script.google.com/macros/s/AKfycbzcyqM_ldoek2P6_VdbvPLDIkMRuvbppsKahZzELBFzuazKrzlpD8j4ln3b179y5Z7s/exec';
      if (CV) {
        let fr = new FileReader();
        fr.addEventListener('loadend', () => {
          let res = fr.result;
          let spt = res?.toString().split('base64,')[1];
          let obj = {
            base64: spt,
            type: CV.files[0].type as string,
            name: CV.files[0].name as string,
            data: JSON.stringify(this.TeachersForm.value),
          };
          console.log(obj);
          fetch(url, {
            method: 'POST',
            body: JSON.stringify(obj),
          })
            .then((r) => r.text())
            .then((data) => this.alertWithSuccess(data))
            .then((data) => {
              console.log(data);
              this._NgxSpinnerService.hide();
              this.TeachersForm.reset();
              CV.value = '';
              this.startValidation = false;
            })
            .catch((error) => console.error('Error:', error));
        });
        fr.readAsDataURL(CV.files[0]);
      }
    }
  }
  /**==================================== */
}
