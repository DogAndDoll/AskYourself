import { Injectable } from '@angular/core';
import { NgxIndexedDB } from 'ngx-indexed-db';
import { from, Observable } from 'rxjs';
import { StorageName } from './storage-name.enum';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    private dbName = 'AskYourself';
    private db = new NgxIndexedDB(this.dbName, 1);

    constructor() { }

    public getDB(): NgxIndexedDB {
        return this.db;
    }

    public openDb(): Observable<NgxIndexedDB> {
        return from(
            this.db.openDatabase(1, event => {
                event.currentTarget.result.createObjectStore(StorageName.question, { keyPath: 'id', autoIncrement: true });

                const objectStore =
                    event.currentTarget.result.createObjectStore(StorageName.answer, { keyPath: 'id', autoIncrement: true });

                objectStore.createIndex('questionId', 'questionId', { unique: false });
            })
        ).pipe(
            map(() => this.db)
        );
    }
}
