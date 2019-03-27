import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SettingsService } from './settings.service';
import { Observable } from 'rxjs';
import { PrePrimary, PrePrimaryModel } from '../model/pre-primary';

@Injectable({
  providedIn: 'root'
})

export class PrePrimaryService {

  private schoolsUrl: string;

  constructor(private http: HttpClient, private settings: SettingsService) {
    this.schoolsUrl = `${this.settings.getApiUrl()}schools/preprimaryschools/`;
  }

  getPrePrimarySchoolById(id: Number): Observable<PrePrimaryModel> {
    const url = `${this.schoolsUrl}` + id;
    return this.http.get<PrePrimaryModel>(url);
  }

}
