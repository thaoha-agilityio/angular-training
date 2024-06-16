import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

// Environment
import { ENV } from '@/environments/environment';

@Injectable()
export class BaseService<T> {
  public path!: string;
  public http: HttpClient;

  private dataChangedSubject = new BehaviorSubject<any>(null);
  public dataChanged$ = this.dataChangedSubject.asObservable();

  constructor(http: HttpClient) {
    this.http = http;
  }

  API_ROOT: string = ENV.apiUrl;

  getFullUrl(url: string): string {
    return `${this.API_ROOT}${url}`;
  }

  getList(): Observable<T[]> {
    return this.http.get<T[]>(this.getFullUrl(this.path));
  }

  getItem(url: string): Observable<T> {
    return this.http.get<T>(this.getFullUrl(`${this.path}/${url}`));
  }

  getWithParams(url: string): Observable<T[]> {
    return this.http.get<T[]>(this.getFullUrl(url));
  }

  /**
   * Call API with POST method
   * @param item
   */
  post<K>(item: T): Observable<K> {
    return this.http.post<K>(this.getFullUrl(this.path), item).pipe(
      tap((response: K) => {
        this.dataChangedSubject.next(response);
      })
    );
  }

  /**
   * Call API with PUT method
   * @param url
   */
  put(id: string, item: T): Observable<T> {
    const url = `${this.path}/${id}`;

    return this.http.put<T>(this.getFullUrl(url), item).pipe(
      tap((response: T) => {
        this.dataChangedSubject.next(response);
      })
    );
  }

  /**
   * Call API with DELETE method
   * @param url
   */
  delete(id: string): Observable<T> {
    const url = `${this.path}/${id}`;

    return this.http.delete<T>(this.getFullUrl(url)).pipe(
      tap((response: T) => {
        this.dataChangedSubject.next(response);
      })
    );
  }
}
