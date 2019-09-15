import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionListComponent } from '../question/question-list/question-list.component';
import { QuestionViewComponent } from '../question/question-view/question-view.component';

const routes: Routes = [
    { path: '', redirectTo: 'questions', pathMatch: 'full' },
    { path: 'questions', component: QuestionListComponent },
    { path: 'questions/:id', component: QuestionViewComponent },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
