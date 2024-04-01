import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizappdashComponent } from './quizappdash.component';

describe('QuizappdashComponent', () => {
  let component: QuizappdashComponent;
  let fixture: ComponentFixture<QuizappdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizappdashComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuizappdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
