import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamliveComponent } from './examlive.component';

describe('ExamliveComponent', () => {
  let component: ExamliveComponent;
  let fixture: ComponentFixture<ExamliveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamliveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExamliveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
