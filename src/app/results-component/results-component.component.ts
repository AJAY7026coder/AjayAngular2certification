import { Component, OnInit } from '@angular/core';

import { DataShareService } from '../data-share.service';
import { Router } from '@angular/router';
import { QuestionModel } from '../questions/question-model.model';

@Component({
  selector: 'app-results-component',
  templateUrl: './results-component.component.html',
  styleUrls: ['./results-component.component.css']
})
export class ResultsComponentComponent implements OnInit {
  questions : QuestionModel[];
  constructor(private  dataShareService : DataShareService,private router : Router) { }

  noOfSelectedAnswers : number = 0;
  cssClass : string ='';

  ngOnInit() {
      console.log(this.dataShareService);
      this.questions = this.dataShareService.userQuestions;

      for(let question of this.questions){
         if(question.userSelectedAnswer == question.correct_answer){
          this.noOfSelectedAnswers ++;
         }
      }

      if(this.noOfSelectedAnswers >= 4){
        this.cssClass = 'green';
      }else if(this.noOfSelectedAnswers >= 2){
        this.cssClass = 'yellow';
      }else{
         this.cssClass = 'red';
      }

  }

  createNewQuiz(){
     this.router.navigate(['/quiz']);
  }

}
