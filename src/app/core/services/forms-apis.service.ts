import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormsApisService {
  constructor(private _HttpClient: HttpClient) {}

  addStudentToSheets(studentData: {}): Observable<any> {
    return this._HttpClient.post(
      `https://script.google.com/macros/s/AKfycbwksjQA7y--UG-LDNjCMWNhBKnQa0nGewMYdeKPZWw_OziD3XQVgTQafG9ofLGN42y9/exec`,
      JSON.stringify(studentData)
    );
  }
  addFeedBackToSheets(studentData: {}): Observable<any> {
    return this._HttpClient.post(
      `https://script.google.com/macros/s/AKfycbxhRt3tRMxnCR7MetkYr1Lu63ZgoiZFSYGlpMrjm2Vb2jQWTrQOZrTgFxi2DrpuvYCIKg/exec`,
      JSON.stringify(studentData)
    );
  }
  addCourseEnrollBackToSheets(studentData: {}): Observable<any> {
    return this._HttpClient.post(
      `https://script.google.com/macros/s/AKfycbyZ7bo7NfFW7LjLTT9VPpS3l3Z3HhHxgcCI6eCMcrWcTFxkSLp1FNlxn44f76_smtijtQ/exec`,
      JSON.stringify(studentData)
    );
  }
  addTeacherToSheets(studentData: {}): Observable<any> {
    return this._HttpClient.post(
      `https://script.google.com/macros/s/AKfycbzcyqM_ldoek2P6_VdbvPLDIkMRuvbppsKahZzELBFzuazKrzlpD8j4ln3b179y5Z7s/exec`,
      studentData
    );
  }
}
