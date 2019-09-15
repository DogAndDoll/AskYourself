import { Injectable } from '@angular/core';
import { Question } from './question';
import { NgxIndexedDB } from 'ngx-indexed-db';
import { Observable, from, BehaviorSubject } from 'rxjs';
import { concatMap, first, map } from 'rxjs/operators';
import { StorageService } from '../storage/storage.service';
import { StorageName } from '../storage/storage-name.enum';
import { questionsSeed } from './seed';

@Injectable({
    providedIn: 'root'
})
export class QuestionService {

    private questionsSubject: BehaviorSubject<Question[]> = new BehaviorSubject([]);

    constructor(
        private storage: StorageService
    ) { }

    public index(): BehaviorSubject<Question[]> {
        this.pushCurrentQuestions();

        return this.questionsSubject;
    }

    public get(id: number): Observable<Question> {
        return this.storage.openDb().pipe(
            concatMap((db: NgxIndexedDB) => from(db.getByKey(StorageName.question, id))),
        );
    }

    public add(question: Question): void {
        this.storage.getDB().add(StorageName.question, question);
        this.pushCurrentQuestions();
    }

    public update(question: Question): void {
        this.storage.getDB().update(StorageName.question, question);
    }

    private pushCurrentQuestions(): void {
        this.storage.openDb().pipe(
            concatMap((db) => from(db.getAll(StorageName.question))),
            map(
                (questions: Question[]) => {
                    if (questions.length === 0) {
                        this.seed();
                    }
                    this.questionsSubject.next(questions.reverse());
                }
            ),
            first()
        ).subscribe();
    }

    private seed(): void {
        questionsSeed.forEach(q => this.add(q));
    }
}
