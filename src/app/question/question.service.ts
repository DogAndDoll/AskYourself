import { Injectable } from '@angular/core';
import { Question } from './question';
import { NgxIndexedDB } from 'ngx-indexed-db';
import { Observable, from } from 'rxjs';
import { concatMap, first } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class QuestionService {

    private dbName = 'AskYourself';
    private questionStorage = 'questions';
    private db = new NgxIndexedDB(this.dbName, 1);

    constructor(
    ) {
    }

    public getQuestions(): Observable<Question[]> {
        return this.openDb().pipe(
            concatMap(() => from(this.db.getAll(this.questionStorage))),
            first()
        );
    }

    public addQuestion(question: Question): void {
        this.db.add(this.questionStorage, question);
    }

    private openDb(): Observable<any> {
        return from(this.db.openDatabase(1, event => {
            event.currentTarget.result.createObjectStore(this.questionStorage, { keyPath: 'id', autoIncrement: true });
        }));
    }
}
