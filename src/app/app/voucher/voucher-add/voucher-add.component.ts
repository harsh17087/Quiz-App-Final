import { Component } from '@angular/core';
import {FormControl, FormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { GlobalService } from '../../../shared/services/global.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-voucher-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './voucher-add.component.html',
  styleUrl: './voucher-add.component.css'
})
export class VoucherAddComponent {
  
  voucherData:any
  constructor(private _globalSer:GlobalService,private _route:Router){}

  ngOnInit(){
    this.voucherData=new FormGroup({
      id:new FormControl(""),
      voucher_code:new FormControl(""),
      
    })
  }
  addData(data:any){
    // console.log(data)
    
    this._globalSer.postRequest('vouchers',data).subscribe(()=>{
      window.alert("Voucher Added successfully")
      this._route.navigate(["maindash/voucher"])
    })
  }
}
