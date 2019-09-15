import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { Question } from '../question';
import { QuestionService } from '../question.service';

@Component({
    selector: 'app-question-view',
    templateUrl: './question-view.component.html',
    styleUrls: ['./question-view.component.scss']
})
export class QuestionViewComponent implements OnInit, OnDestroy {

    public question$: Observable<Question>;
    private questionId: number;
    private routeSubscription: Subscription;

    constructor(
        private route: ActivatedRoute,
        private questionService: QuestionService
    ) { }

    ngOnInit() {
        this.routeSubscription = this.route.paramMap.subscribe(params => {
            this.questionId = parseInt(params.get('id'), 10);
            this.question$ = this.questionService.getQuestion(this.questionId);
        });
    }

    ngOnDestroy(): void {
        this.routeSubscription.unsubscribe();
    }

}
