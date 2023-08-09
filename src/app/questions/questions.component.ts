import { Component, Input,OnInit } from '@angular/core';
import { QuestionModel } from './question-model.model';
import { QuestionsApiService } from './questions-api-service.service';
import { QuestionApiResponse } from './question-api-response.model';
import { Router } from '@angular/router';
import { DataShareService } from '../data-share.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent  {

    amount:number = 5;
    type : string ='multiple';
    questions : QuestionModel[];
    isAllAnswersSelected : boolean;

  constructor(private questionsApiService: QuestionsApiService,private router : Router,private  dataShareService : DataShareService) { }


  renderQuestions(category,difficulty) {
       console.log('category : '+ category);
       console.log('difficulty : '+ difficulty);
       this.isAllAnswersSelected = false;
       this.questionsApiService.getQuestions(this.amount,category,difficulty,this.type).subscribe((data: QuestionApiResponse) => {
         console.log(data);
         let questionsTmpArray = data.results;
         for (var question of questionsTmpArray) {
              question.incorrect_answers.push(question.correct_answer);
              //shuffle(question.incorrect_answers);
               question.incorrect_answers = question.incorrect_answers.sort((a, b) => 0.5 - Math.random());
         }
         this.questions = questionsTmpArray;
       });
  }



  setUserSelectedAnswer(question,userAnswer){
    console.log(question);
    console.log(userAnswer);
    question.userSelectedAnswer = userAnswer;
    let noOfAnswersSelected = 0;
    for(let question of this.questions){
      if(question.userSelectedAnswer){
        noOfAnswersSelected++;
      }
    }

    if(noOfAnswersSelected == this.questions.length){
      this.isAllAnswersSelected = true;
    }

  }

  showResults(){
    this.dataShareService.userQuestions = this.questions;
    this.router.navigate(['/results']);
  }

}
