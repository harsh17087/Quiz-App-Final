import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule,Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GlobalService } from '../../shared/services/global.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
// import {MatInputModule} from '@angular/material/input';
// import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-login-user',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,CommonModule],
  templateUrl: './login-user.component.html',
  styleUrl: './login-user.component.css'
})
export class LoginUserComponent {
  userData:any
  userDb:any=[]
  showName:any
  constructor(private _globalSer:GlobalService, private _router:Router){}

  ngOnInit(){
    this.userData=new FormGroup({
      userId:new FormControl("",[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      userPass:new FormControl("",[Validators.required,Validators.pattern("^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$")]),
    })
  }

  checkData(){
    console.log(this.userData.value)
    this._globalSer.getRequest("users").subscribe((res)=>{
      this.userDb=res.data
      // console.log(this.userDb)
      const data=this.userDb.filter((val:any)=>{return val.email==this.userData.value.userId && val.password==this.userData.value.userPass})
      
      if(data.length>0){
        this._globalSer.signIn(this.userData.value.userId)
        this._router.navigate(['examlogin'])
      }else{
        window.alert("Invalid Credential")
      }
    })
  }


}
