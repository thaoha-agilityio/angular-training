import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Environment
import { ENV } from '@/environments/environment';

@Injectable()
export class BaseService<T> {
  public path!: string;
  public http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  // JSON server
  API_ROOT: string = ENV.apiUrl;

  getFullUrl(url: string): string {
    return `${this.API_ROOT}${url}`;
  }

  /**
   * Call API with GET method
   * @param url
   */
  getList(): Observable<T[]> {
    return this.http.get<T[]>(this.getFullUrl(this.path));
  }

  getItem(url: string): Observable<T> {
    return this.http.get<T>(this.getFullUrl(`${this.path}/${url}`));
  }

  /**
   * Call API with GET method and query parameters
   * @param url
   */
  getWithParams(url: string): Observable<T[]> {
    return this.http.get<T[]>(this.getFullUrl(url));
  }

  /**
   * Call API with POST method
   * @param url
   * @param body
   */
  post<T, K>(item: T): Observable<K> {
    return this.http.post<K>(this.getFullUrl(this.path), item);
  }
}
