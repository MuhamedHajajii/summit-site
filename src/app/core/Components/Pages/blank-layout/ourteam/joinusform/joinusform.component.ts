import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-joinusform',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './joinusform.component.html',
  styleUrl: './joinusform.component.scss',
})
export class JoinusformComponent {
  formData = {
    name: '',
    email: '',
    mobile: '',
    pdfFile: null as File | null, // Hold the selected file
  };

  scriptURL =
    'https://script.google.com/macros/s/AKfycbxcRYPEVDDm2IquAi2PVZtLexW75N60ZfM2RUXZlKpqSkmm6oRTJaUHYAwlkXNJSXaDKw/exec';

  constructor(private http: HttpClient) {}

  submitForm() {
    const formData = new FormData();
    formData.append('name', this.formData.name);
    formData.append('email', this.formData.email);
    formData.append('mobile', this.formData.mobile);
    if (this.formData.pdfFile) {
      formData.append(
        'pdfFile',
        this.formData.pdfFile,
        this.formData.pdfFile.name
      );
    }

    this.http.post<any>(this.scriptURL, formData).subscribe(
      (response) => {
        console.log('Form submission successful:', response);
        alert('Thanks for contacting us! We will contact you soon.');
        // Optionally reset the form after successful submission
        // this.formData = { name: '', email: '', mobile: '', pdfFile: null };
      },
      (error) => {
        console.error('Error submitting form:', error);
        alert('An error occurred. Please try again later.');
      }
    );
  }

  onFileSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files) {
      this.formData.pdfFile = fileInput.files[0];
    }
  }
}
