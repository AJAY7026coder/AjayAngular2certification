import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionsComponent } from './questions/questions.component';
import { ResultsComponentComponent } from './results-component/results-component.component';
import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  { path:'results', component:ResultsComponentComponent},
  { path: 'quiz', component:QuizComponent },  // you must add your component here
  { path: 'questions', component:QuestionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
