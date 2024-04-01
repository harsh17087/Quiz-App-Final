import { Component } from '@angular/core';
import { GlobalService } from '../../../shared/services/global.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
@Component({
  selector: 'app-exam-dashboard',
  standalone: true,
  imports: [CommonModule,RouterLink,NgxPaginationModule],
  templateUrl: './exam-dashboard.component.html',
  styleUrl: './exam-dashboard.component.css'
})
export class ExamDashboardComponent {
  examArray:any
  p:number=1
  adminLogin:boolean=sessionStorage.getItem('user')=="harsh@gmail.com" ? true:false
  constructor(private _globalSer:GlobalService){}

  ngOnInit(){
    this.getData()
  }

  getData(){
    this._globalSer.getRequest('exams').subscribe((res)=>{
      this.examArray=res  
    })
  }

  deleteData(id:any){
    
    if(window.confirm(`Are you sure to delete exam with id :${id}`)){
      this._globalSer.deleteRequest('exams',id).subscribe((res)=>{})
    window.alert("Exam deleted succesfully")
    this.getData()
    }  
  }
  
  
}
