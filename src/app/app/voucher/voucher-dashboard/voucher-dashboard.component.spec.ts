import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherDashboardComponent } from './voucher-dashboard.component';

describe('VoucherDashboardComponent', () => {
  let component: VoucherDashboardComponent;
  let fixture: ComponentFixture<VoucherDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoucherDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoucherDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
