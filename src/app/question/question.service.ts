import { Injectable } from '@angular/core';
import { Question } from './question';
import { NgxIndexedDB } from 'ngx-indexed-db';
import { Observable, from } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class QuestionService {

    private dbName = 'AskYourself';
    private questionStorage = 'questions'
    private db = new NgxIndexedDB(this.dbName, 1);

    constructor(
    ) {

    }

    public getQuestions(): Observable<Question[]> {
        return from(this.db.getAll(this.questionStorage));
    }

    public addQuestion(question: Question): void {
        this.db.add(this.questionStorage, question);
    }
}
