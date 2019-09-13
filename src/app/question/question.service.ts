import { Injectable } from '@angular/core';
import { Question } from './question';

@Injectable({
    providedIn: 'root'
})
export class QuestionService {

    constructor() { }

    public getQuestions(): Question[] {
        return [];
    }
}
