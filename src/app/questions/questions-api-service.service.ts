import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuestionApiResponse } from './question-api-response.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionsApiService {

  apiUrl = 'https://opentdb.com';

  constructor(private http: HttpClient) { }

  getQuestions(amount:number,category:number,difficulty:string,type : string): Observable<QuestionApiResponse> {

      return this.http.get<QuestionApiResponse>(`${this.apiUrl}/api.php?amount=`+amount+'&category='+category+'&difficulty='+difficulty+'&type='+type);
    }
}
