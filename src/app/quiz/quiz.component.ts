import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ApiService } from './api-service.service';
import { CategoryModel } from './category-model.model';
import { CategoryApiResponse } from './category-api-response.model';
import { FormsModule } from '@angular/forms';
import { QuestionsComponent } from '../questions/questions.component';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

 categories: CategoryModel[];

   selectedCategory : string;
   selectedDifficulty : string;


   @ViewChild(QuestionsComponent) child: QuestionsComponent;


   constructor(private apiService: ApiService) {
     this.selectedCategory = '';
     this.selectedDifficulty = '';
   }

    ngOnInit() {
       this.apiService.getCategories().subscribe((data: CategoryApiResponse) => {
         console.log(data);
         this.categories = data.trivia_categories;
       });
     }

      createQuiz(){
         console.log(this.selectedCategory);
         console.log(this.selectedDifficulty);

         if(this.selectedCategory == '' || this.selectedDifficulty == ''){
          alert('please select both catergory and difficulty');
          return;
         }

         this.child.renderQuestions(this.selectedCategory,this.selectedDifficulty);

     }

}
