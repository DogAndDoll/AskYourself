import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionComponent } from './question/question.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { NewQuestionDialogComponent } from './new-question-dialog/new-question-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDividerModule } from '@angular/material/divider';
import { QuestionViewComponent } from './question-view/question-view.component';
import { RouterModule } from '@angular/router';
import { AnswerListComponent } from './answer-list/answer-list.component';
import { NewAnswerDialogComponent } from './new-answer-dialog/new-answer-dialog.component';
import { AnswerComponent } from './answer/answer.component';


@NgModule({
    declarations: [
        QuestionListComponent,
        QuestionComponent,
        NewQuestionDialogComponent,
        QuestionViewComponent,
        AnswerListComponent,
        NewAnswerDialogComponent,
        AnswerComponent
    ],
    exports: [
        QuestionListComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatCardModule,
        MatGridListModule,
        MatBadgeModule,
        MatDividerModule
    ],
    entryComponents: [
        NewQuestionDialogComponent,
        NewAnswerDialogComponent
    ]
})
export class QuestionModule { }
