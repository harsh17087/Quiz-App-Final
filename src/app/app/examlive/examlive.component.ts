import { AfterViewInit, Component, viewChild } from '@angular/core';
import { GlobalService } from '../../shared/services/global.service';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FormGroup,FormControl,FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
@Component({
  selector: 'app-examlive',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './examlive.component.html',
  styleUrl: './examlive.component.css'
})
export class ExamliveComponent{
  questionArray:any
  temp:any
  correct:number=0
  showCorrect:boolean=false
  show_answer:boolean=false
  
  constructor(private fb:FormBuilder, private _globalSer:GlobalService,private _route:Router){}


  getData(){
    this._globalSer.getRequest('questions').subscribe((res)=>{
      this.questionArray=res.data
      console.log(this.questionArray)
    })
  }

  answerForm:any
 
 
  ngOnInit(){
    this.getData()
    this.answerForm=new FormGroup({
      101:new FormControl(""),
      102:new FormControl(""),
      103:new FormControl(""),
      104:new FormControl(""),
      105:new FormControl(""),
      106:new FormControl(""),
      107:new FormControl(""),
      108:new FormControl(""),
      109:new FormControl(""),
      110:new FormControl(""),
      
      // term:new FormControl("",[Validators.requiredTrue])
 
    })
  }
  submitData(data:any){
    window.scroll(0,0)
    this.showCorrect=true
    console.log(this.answerForm.value)
    this.temp=this.answerForm.value
    
    for(let key in this.temp){
      if(key=='101' && this.temp[key]=='Tiger'){
        this.correct++
      }
      if(key=='102' && this.temp[key]=='Peacock'){
        this.correct++
      }
      if(key=='103' && this.temp[key]=='New Delhi'){
        this.correct++
      }
      if(key=='104' && this.temp[key]=='Jaipur'){
        this.correct++
      }
      if(key=='105' && this.temp[key]=='Kolkata'){
        this.correct++
      }
      if(key=='106' && this.temp[key]=='Bangalore'){
        this.correct++
      }
      if(key=='107' && this.temp[key]=='India'){
        this.correct++
      }
      if(key=='108' && this.temp[key]=='Paris'){
        this.correct++
      }
      if(key=='109' && this.temp[key]=='Christopher Nolan'){
        this.correct++
      }
      if(key=='110' && this.temp[key]=='2019'){
        this.correct++
      }
      
      }
    }
    logOut(){
      if(window.confirm('Do you want to quit test and Log out')){
        this._globalSer.signOut()
        this._route.navigate(['quiz'])
      }
      
      
    }
  

    showAnswer(){
      this._route.navigate(['testresult'])
    }
    
    
}
