import { QuestionModel } from './question-model.model';

export class QuestionApiResponse {
  response_code : number;
  results : QuestionModel[];
}
