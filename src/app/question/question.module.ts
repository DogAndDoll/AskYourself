import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionComponent } from './question/question.component';



@NgModule({
  declarations: [QuestionListComponent, QuestionComponent],
  imports: [
    CommonModule
  ]
})
export class QuestionModule { }
