import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Observable } from 'rxjs';
import { Question } from '../question';

@Component({
    selector: 'app-question-list',
    templateUrl: './question-list.component.html',
    styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

    public questions$: Observable<Question[]>;

    constructor(
        private questionService: QuestionService
    ) { }

    ngOnInit() {
        this.questions$ = this.questionService.getQuestions();
    }

}
