import { Component, OnInit, Input } from '@angular/core';
import { Answer } from '../answer';
import { AnswerService } from '../answer.service';

@Component({
    selector: 'app-answer',
    templateUrl: './answer.component.html',
    styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {
    @Input()
    public answer: Answer;

    constructor(
        private answerService: AnswerService
    ) { }

    ngOnInit() {
    }

    public getScore(): number {
        return (this.answer.upVotes || 0) - (this.answer.downVotes || 0);
    }

    public upVote(): void {
        this.answer.upVotes++;
        this.answerService.update(this.answer);
    }

    public downVote(): void {
        this.answer.downVotes++;
        this.answerService.update(this.answer);
    }


}
