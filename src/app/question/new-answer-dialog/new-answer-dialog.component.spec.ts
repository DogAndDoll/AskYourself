import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAnswerDialogComponent } from './new-answer-dialog.component';

describe('NewAnswerDialogComponent', () => {
  let component: NewAnswerDialogComponent;
  let fixture: ComponentFixture<NewAnswerDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAnswerDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAnswerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
