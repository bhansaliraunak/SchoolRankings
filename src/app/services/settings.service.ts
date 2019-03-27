import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private baseUrl = 'http://localhost:8000/';
  private basePath = 'api/v1/';

  constructor() { }

  getApiUrl() {
    return `${this.baseUrl}${this.basePath}`;
  }
  
}
