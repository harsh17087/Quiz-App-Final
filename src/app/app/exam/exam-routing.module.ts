import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamDashboardComponent } from './exam-dashboard/exam-dashboard.component';
import { ExamAddComponent } from './exam-add/exam-add.component';
import { ExamEditComponent } from './exam-edit/exam-edit.component';

const routes: Routes = [
  {path:"",component:ExamDashboardComponent},
  {path:'examdashboard',component:ExamDashboardComponent},
  {path:'examadd',component:ExamAddComponent},
  {path:'examedit/:id',component:ExamEditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamRoutingModule { }
