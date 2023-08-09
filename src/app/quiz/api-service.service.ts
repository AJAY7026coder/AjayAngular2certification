import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryApiResponse } from './category-api-response.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'https://opentdb.com';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<CategoryApiResponse> {
    return this.http.get<CategoryApiResponse>(`${this.apiUrl}/api_category.php`);
  }
}
