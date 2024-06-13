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

  post<K>(item: T): Observable<K> {
    return this.http.post<K>(this.getFullUrl(this.path), item).pipe(
      tap((response: K) => {
        this.dataChangedSubject.next(response);
      })
    );
  }
}
