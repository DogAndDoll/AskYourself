import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Observable } from 'rxjs';
import { Question } from '../question';
import { MatDialog } from '@angular/material/dialog';
import { NewQuestionDialogComponent } from '../new-question-dialog/new-question-dialog.component';

@Component({
    selector: 'app-question-list',
    templateUrl: './question-list.component.html',
    styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

    public questions$: Observable<Question[]>;

    constructor(
        public dialog: MatDialog,
        private questionService: QuestionService
    ) { }

    ngOnInit() {
        this.questions$ = this.questionService.getQuestions();
    }

    addQuestion(): void {
        const dialogRef = this.dialog.open(NewQuestionDialogComponent, {
            width: '550px',
            data: {}
        });

        dialogRef.afterClosed().subscribe(
            (question: Question) => {
                question.date = new Date();
                this.questionService.addQuestion(question);
            }
        );
    }

}
