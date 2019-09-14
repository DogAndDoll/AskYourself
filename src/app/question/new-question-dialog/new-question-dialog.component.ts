import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Question } from '../question';

@Component({
    selector: 'app-new-question-dialog',
    templateUrl: './new-question-dialog.component.html',
    styleUrls: ['./new-question-dialog.component.scss']
})
export class NewQuestionDialogComponent {

    constructor(
        public dialogRef: MatDialogRef<NewQuestionDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Question) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

}
