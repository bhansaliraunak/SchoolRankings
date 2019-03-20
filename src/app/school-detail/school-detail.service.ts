import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SchoolData } from '../model/school';
import { map } from 'rxjs/operators';

@Injectable()
export class SchoolDetailService {

  constructor(private http: HttpClient) {}

  private apiUrl = 'http://localhost:8000/api/v1/schools/';

  school: SchoolData[];


  getSchool(id): Observable<SchoolData[]> {

      return this.http.get<SchoolData[]>(this.apiUrl + id).pipe( map(items => items));
  }

}
