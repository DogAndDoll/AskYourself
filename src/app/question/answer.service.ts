import { Injectable } from '@angular/core';
import { NgxIndexedDB } from 'ngx-indexed-db';
import { Observable } from 'rxjs';
import { Answer } from './answer';
import { first, concatMap } from 'rxjs/operators';
import { StorageService } from '../storage/storage.service';
import { StorageName } from '../storage/storage-name.enum';

@Injectable({
    providedIn: 'root'
})
export class AnswerService {

    constructor(
        private storage: StorageService
    ) {
    }

    public index(questionId: number): Observable<Answer[]> {
        return this.storage.openDb().pipe(
            concatMap((db: NgxIndexedDB) => db.getAll(
                StorageName.answer,
                IDBKeyRange.only(questionId),
                { indexName: 'questionId', order: 'desc' }
            )),
            first()
        );
    }

    public add(answer: Answer): void {
        this.storage.getDB().add(StorageName.answer, answer);
    }

    public update(answer: Answer): void {
        this.storage.getDB().update(StorageName.answer, answer);
    }

}
