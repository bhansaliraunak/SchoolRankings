import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SettingsService } from './settings.service';
import { Observable } from 'rxjs';
import { School } from '../model/school';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  private schoolsUrl: string;

  constructor(private http: HttpClient, private settings: SettingsService) {
    this.schoolsUrl = `${this.settings.getApiUrl()}schools`;
  }

  getSchoolById(id: Number): Observable<School[]> {
    const url = `${this.schoolsUrl}/` + id;
    return this.http.get<School[]>(url).pipe(map(items => items));
  }

  searchSchools(term: string): Observable<School[]> {
    const url = `${this.schoolsUrl}/search/${term}`;
    return this.http.get<School[]>(url);
  }

   
  getGeoLocSchools(term: string): Observable<School[]>{
    const url = `${this.schoolsUrl}/find/${term}`;
    return this.http.get<School[]>(url);
 }

}
