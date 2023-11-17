import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
/**
 * Common service file which can be used where ever the REST API is called
 */
@Injectable()
export class BaseHttpService {
  protected headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  protected httpOptions = {
    headers: this.headers,
  };

  constructor(protected http: HttpClient) {}

  /**
   * Add a new resource of a type
   *
   */
  create(url: string, body: any): Observable<any> {
    // ...using Post request
    return this.http.post<any>(url, body, this.httpOptions);
  }

  put(url: string, urlParams?: any): Observable<any> {
    // ...using Put request
    return this.http.put<any>(url, this.httpOptions, { params: urlParams });
  }
}
