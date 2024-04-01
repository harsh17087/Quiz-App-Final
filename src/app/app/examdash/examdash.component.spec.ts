import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamdashComponent } from './examdash.component';

describe('ExamdashComponent', () => {
  let component: ExamdashComponent;
  let fixture: ComponentFixture<ExamdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamdashComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExamdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
