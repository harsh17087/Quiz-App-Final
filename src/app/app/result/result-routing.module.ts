import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultDashboardComponent } from './result-dashboard/result-dashboard.component';
import { ResultAddComponent } from './result-add/result-add.component';
import { ResultEditComponent } from './result-edit/result-edit.component';

const routes: Routes = [
  {path:"",component:ResultDashboardComponent},
  {path:'resultdashboard',component:ResultDashboardComponent},
  {path:'resultadd',component:ResultAddComponent},
  {path:'resultedit',component:ResultEditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultRoutingModule { }
