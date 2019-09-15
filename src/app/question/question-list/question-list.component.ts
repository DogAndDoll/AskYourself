import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Observable } from 'rxjs';
import { Question } from '../question';
import { MatDialog } from '@angular/material/dialog';
import { NewQuestionDialogComponent } from '../new-question-dialog/new-question-dialog.component';
import { Router } from '@angular/router';

@Component({
    selector: 'app-question-list',
    templateUrl: './question-list.component.html',
    styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

    public questions$: Observable<Question[]>;

    constructor(
        public dialog: MatDialog,
        public router: Router,
        private questionService: QuestionService
    ) { }

    ngOnInit() {
        this.questions$ = this.questionService.getQuestions();
    }

    public addQuestion(): void {
        const dialogRef = this.dialog.open(NewQuestionDialogComponent, {
            width: '550px',
            data: {}
        });

        dialogRef.afterClosed().subscribe(
            (question: Question) => {
                if (question) {
                    question.date = new Date();
                    question.downVotes = 0;
                    question.upVotes = 0;
                    this.questionService.addQuestion(question);
                }
            }
        );
    }

    public trackQuestion(index: number, question: Question): number {
        return question.id;
    }

}
