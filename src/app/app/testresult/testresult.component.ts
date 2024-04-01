import { Component } from '@angular/core';
import { GlobalService } from '../../shared/services/global.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testresult',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testresult.component.html',
  styleUrl: './testresult.component.css'
})
export class TestresultComponent {
  questionArray:any
  
  constructor(private _globalSer:GlobalService,private _route:Router){}


  getData(){
    this._globalSer.getRequest('questions').subscribe((res)=>{
      this.questionArray=res.data
      console.log(this.questionArray)
    })
  }
  ngOnInit(){
    this.getData()
  }
  logOut(){
    if(window.confirm('Do you want to Log out')){
      this._globalSer.signOut()
      this._route.navigate(['quiz'])
    }
    
    
  }
}
