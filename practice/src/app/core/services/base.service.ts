import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Environment
import { ENV } from '@/environments/environment';

@Injectable()
export class BaseService<T> {
  constructor(private http: HttpClient) {}

  // JSON server
  API_ROOT: string = ENV.apiUrl;

  getFullUrl(url: string): string {
    return `${this.API_ROOT}${url}`;
  }

  /**
   * Call API with GET method
   * @param url
   */
  getList(url: string): Observable<T[]> {
    return this.http.get<T[]>(this.getFullUrl(url));
  }

  getItem(url: string): Observable<T> {
    return this.http.get<T>(this.getFullUrl(url));
  }
}
