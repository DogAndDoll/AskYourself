import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Answer } from '../answer';
import { AnswerService } from '../answer.service';
import { Question } from '../question';
import { QuestionService } from '../question.service';
import { NewAnswerDialogComponent } from '../new-answer-dialog/new-answer-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-answer-list',
    templateUrl: './answer-list.component.html',
    styleUrls: ['./answer-list.component.scss']
})
export class AnswerListComponent implements OnInit {

    @Input()
    private question: Question;

    public answers$: Observable<Answer[]>;

    constructor(
        private answerService: AnswerService,
        private questionService: QuestionService,
        public dialog: MatDialog
    ) { }

    ngOnInit() {
        this.answers$ = this.answerService.index(this.question.id);
    }

    public trackAnswer(index: number, answer: Answer): number {
        return answer.id;
    }

    public addAnswer(): void {
        const dialogRef = this.dialog.open(NewAnswerDialogComponent, {
            width: '550px',
            data: {}
        });

        dialogRef.afterClosed().subscribe(
            (answer: Answer) => {
                if (answer) {
                    answer.date = new Date();
                    answer.downVotes = 0;
                    answer.upVotes = 0;
                    answer.questionId = this.question.id;
                    this.answerService.add(answer);
                    this.answers$ = this.answerService.index(this.question.id);
                    this.question.answers++;
                    this.questionService.update(this.question);
                }
            }
        );
    }

}
