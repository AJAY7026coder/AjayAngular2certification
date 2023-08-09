import { Injectable } from '@angular/core';
import { QuestionModel } from './questions/question-model.model';


@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  constructor() { }

    public userQuestions: QuestionModel[];
}
