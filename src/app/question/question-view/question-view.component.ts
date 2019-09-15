import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { Question } from '../question';
import { QuestionService } from '../question.service';
import { first } from 'rxjs/operators';

@Component({
    selector: 'app-question-view',
    templateUrl: './question-view.component.html',
    styleUrls: ['./question-view.component.scss']
})
export class QuestionViewComponent implements OnInit, OnDestroy {

    public question: Question;
    private questionId: number;
    private routeSubscription: Subscription;

    constructor(
        private route: ActivatedRoute,
        private questionService: QuestionService
    ) { }

    ngOnInit() {
        this.routeSubscription = this.route.paramMap.subscribe(params => {
            this.questionId = parseInt(params.get('id'), 10);
            this.questionService.getQuestion(this.questionId).pipe(
               first()
            ).subscribe(
               question => this.question = question
           );
        });
    }

    ngOnDestroy(): void {
        this.routeSubscription.unsubscribe();
    }

    public getScore(): number {
        return (this.question.upVotes || 0) - (this.question.downVotes || 0);
    }

    public upVote(): void {
        this.question.upVotes++;
        this.questionService.updateQuestion(this.question);
    }

    public downVote(): void {
        this.question.downVotes++;
        this.questionService.updateQuestion(this.question);
    }

}
