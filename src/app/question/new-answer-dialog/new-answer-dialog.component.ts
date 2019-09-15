import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Answer } from '../answer';

@Component({
  selector: 'app-new-answer-dialog',
  templateUrl: './new-answer-dialog.component.html',
  styleUrls: ['./new-answer-dialog.component.scss']
})
export class NewAnswerDialogComponent {

    constructor(
        public dialogRef: MatDialogRef<NewAnswerDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Answer) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

}
