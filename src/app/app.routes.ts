import { Routes } from '@angular/router';
import { LoginUserComponent } from './app/login-user/login-user.component';
import { ExamdashComponent } from './app/examdash/examdash.component';
import { QuizappdashComponent } from './app/quizappdash/quizappdash.component';
import { ExamliveComponent } from './app/examlive/examlive.component';
import { MaindashComponent } from './app/maindash/maindash.component';
import { authGuard } from './shared/guards/auth.guard';
import { RegisterUserComponent } from './app/register-user/register-user.component';
import { ExamLoginComponent } from './app/exam-login/exam-login.component';
import { TestresultComponent } from './app/testresult/testresult.component';
import { ResultDashboardComponent } from './app/result/result-dashboard/result-dashboard.component';

export const routes: Routes = [

    {path : "", redirectTo:"quiz", pathMatch:"full"},
    {path:"quiz", component:LoginUserComponent},
    {path:"examdash",canActivate:[authGuard], component:ExamLoginComponent},
    {path:"quizappdashboard", component:ExamdashComponent},
    {path:"register", component:RegisterUserComponent},
    {path:"examlive",canActivate:[authGuard], component:ExamliveComponent},
    {path:"examlogin",canActivate:[authGuard], component:ExamLoginComponent},
    {path:"testresult",canActivate:[authGuard], component:TestresultComponent},
    
    {path:"maindash",canActivate:[authGuard], component:MaindashComponent,children:[
        // add canActivate:[authGuard] in maindash later
     {path:"", component:ResultDashboardComponent},
        
        {path:"exam", loadChildren:()=> import('./app/exam/exam.module').then((c)=>c.ExamModule)},
        {path:"voucher", loadChildren:()=> import('./app/voucher/voucher.module').then((s)=>s.VoucherModule)},
        {path:"result", loadChildren:()=> import('./app/result/result.module').then((f)=>f.ResultModule)},
        {path:"question", loadChildren:()=> import('./app/question/question.module').then((f)=>f.QuestionModule)},
    ]},

];
