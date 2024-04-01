import { Component } from '@angular/core';
import { GlobalService } from '../../../shared/services/global.service';
import {FormControl, FormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router} from '@angular/router';
@Component({
  selector: 'app-exam-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './exam-add.component.html',
  styleUrl: './exam-add.component.css'
})
export class ExamAddComponent {
  examData:any
  constructor(private _globalSer:GlobalService,private _route:Router){}

  ngOnInit(){
    this.examData=new FormGroup({
      id:new FormControl(""),
      exam:new FormControl(""),
      
    })
  }
  addData(data:any){
    // console.log(data)
    
    this._globalSer.postRequest('exams',data).subscribe(()=>{
      window.alert("Exam Added successfully")
      this._route.navigate(["maindash/exam"])
    })
  }
}
