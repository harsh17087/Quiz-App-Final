import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoucherDashboardComponent } from './voucher-dashboard/voucher-dashboard.component';
import { VoucherAddComponent } from './voucher-add/voucher-add.component';
import { VoucherEditComponent } from './voucher-edit/voucher-edit.component';

const routes: Routes = [
  {path:"",component:VoucherDashboardComponent},
  {path:'voucherdash',component:VoucherDashboardComponent},
  {path:'voucheradd',component:VoucherAddComponent},
  {path:'voucheredit/:id',component:VoucherEditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoucherRoutingModule { }
