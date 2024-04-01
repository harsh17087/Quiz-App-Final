import { Component } from '@angular/core';
import { ReactiveFormsModule,FormControl,Validators, FormGroup, FormBuilder } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { GlobalService } from '../../shared/services/global.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-examdash',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,CommonModule,MatInputModule,MatFormFieldModule,MatButtonModule],
  templateUrl: './examdash.component.html',
  styleUrl: './examdash.component.css'
})
export class ExamdashComponent {
  
  userData:any;
  userDB:any=[];
  roles:any[]=["ASE","Manager","Developer","Consultant"]
  
  constructor(private _globalSer:GlobalService,private _route:Router){}

  ngOnInit(){
    this.userData = new FormGroup({
      userId:new FormControl("",[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      userPass:new FormControl("",[Validators.required,Validators.pattern("^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$")]),
      role:new FormControl("",[Validators.required]),
    })
  
    
  }
  checkData(){
    console.log(this.userData.value);
    this._globalSer.getRequest("users").subscribe((res)=>{
      this.userDB = res.data;
      const data =this.userDB.filter((val:any)=>{
        return val.email===this.userData.value.userId && val.password===this.userData.value.userPass})
        if(data.length > 0 ){
          this._globalSer.signIn(this.userData.value.userId);
          
          this._route.navigate(['/maindash']);
        }else{
          window.alert("Invalid Credential")
        }
      
    })
  }
  
  }
  
