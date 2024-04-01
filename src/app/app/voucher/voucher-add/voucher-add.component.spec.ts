import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherAddComponent } from './voucher-add.component';

describe('VoucherAddComponent', () => {
  let component: VoucherAddComponent;
  let fixture: ComponentFixture<VoucherAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoucherAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoucherAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
