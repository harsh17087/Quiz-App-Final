import { Component } from '@angular/core';
import { GlobalService } from '../../shared/services/global.service';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-exam-login',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './exam-login.component.html',
  styleUrl: './exam-login.component.css'
})
export class ExamLoginComponent {
  voucherData:any
  userDb:any=[]
  examDb:any=[]
  constructor(private _globalSer:GlobalService, private _router:Router){}

  ngOnInit(){
    this.voucherData=new FormGroup({
      voucherId:new FormControl("",[Validators.required]),
      exam:new FormControl("",[Validators.required])
    })
    this._globalSer.getRequest("exams").subscribe((res)=>{
      this.examDb=res
    })
  }

  checkData(){
    
    
    this._globalSer.getRequest("vouchers").subscribe((res)=>{
      this.userDb=res.data
      
      const data=this.userDb.filter((val:any)=>{return val.voucher_code==this.voucherData.value.voucherId})
      
      if(data.length>0){
        console.log(this.voucherData.value)
        this._router.navigate(['examlive'])
      }else{
        window.alert("Invalid Voucher")
      }
    })
}}
