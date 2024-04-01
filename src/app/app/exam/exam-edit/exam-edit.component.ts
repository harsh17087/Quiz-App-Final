import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from '../../../shared/services/global.service';
@Component({
  selector: 'app-exam-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './exam-edit.component.html',
  styleUrl: './exam-edit.component.css'
})
export class ExamEditComponent {
  id:any
  examData:any
  temp:any
  constructor(private _actRoute:ActivatedRoute, private _globalSer:GlobalService,private _route:Router){}

  ngOnInit(){
    
    
    this._actRoute.paramMap.subscribe((para)=>{
      // console.log(para)
       this.id=para.get("id")
      this._globalSer.singleUserGetRequest('exams',this.id).subscribe((res)=>{
        this.temp={...res}
        this.examData=this.temp.data
      })
    })
  }
  addData(data:any){
    console.log(data)
    
    this._globalSer.putRequest('exams',this.id,data).subscribe(()=>{
      window.alert("Exam Updated successfully")
      this._route.navigate(["maindash/exam"])
    })
  }
}
