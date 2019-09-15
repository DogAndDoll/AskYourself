import { Injectable } from '@angular/core';
import { Question } from './question';
import { NgxIndexedDB } from 'ngx-indexed-db';
import { Observable, from, Subject, BehaviorSubject } from 'rxjs';
import { concatMap, first, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class QuestionService {

    private dbName = 'AskYourself';
    private questionStorage = 'questions';
    private db = new NgxIndexedDB(this.dbName, 1);
    private questionsSubject: BehaviorSubject<Question[]> = new BehaviorSubject([]);

    constructor(
    ) {
    }

    public getQuestions(): BehaviorSubject<Question[]> {
        this.pushCurrentQuestions();
        return this.questionsSubject;
    }

    public getQuestion(id: number): Observable<Question> {
        return this.openDb().pipe(
            concatMap(() => from(this.db.getByKey(this.questionStorage, id))),
        );
    }

    public addQuestion(question: Question): void {
        this.db.add(this.questionStorage, question);
        this.pushCurrentQuestions();
    }

    public updateQuestion(question: Question): void {
        this.db.update(this.questionStorage, question);
    }

    private openDb(): Observable<any> {
        return from(this.db.openDatabase(1, event => {
            event.currentTarget.result.createObjectStore(this.questionStorage, { keyPath: 'id', autoIncrement: true });
        }));
    }

    private pushCurrentQuestions(): void {
        this.openDb().pipe(
            concatMap(() => from(this.db.getAll(this.questionStorage))),
            map(
                (questions: Question[]) =>
                    this.questionsSubject.next(questions.reverse())
            ),
            first()
        ).subscribe();
    }
}
