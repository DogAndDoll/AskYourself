import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../question';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.scss'],
    providers: [DatePipe]
})
export class QuestionComponent implements OnInit {

    @Input()
    public question: Question;

    constructor() { }

    ngOnInit() {
    }

    public getScore(): number {
        return (this.question.upVotes || 0) - (this.question.downVotes || 0);
    }

}
