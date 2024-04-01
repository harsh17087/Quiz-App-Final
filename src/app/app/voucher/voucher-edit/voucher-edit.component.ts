import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from '../../../shared/services/global.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-voucher-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './voucher-edit.component.html',
  styleUrl: './voucher-edit.component.css'
})
export class VoucherEditComponent {
  id:any
  voucherData:any
  temp:any
  constructor(private _actRoute:ActivatedRoute, private _globalSer:GlobalService,private _route:Router){}

  ngOnInit(){
    
    
    this._actRoute.paramMap.subscribe((para)=>{
      // console.log(para)
       this.id=para.get("id")
      this._globalSer.singleUserGetRequest('vouchers',this.id).subscribe((res)=>{
        this.temp={...res}
        this.voucherData=this.temp.data
        console.log(this.voucherData)
        
      })
    })
  }
  addData(data:any){
    console.log(data)
    
    this._globalSer.putRequest('vouchers',this.id,data).subscribe(()=>{
      window.alert("Voucher Updated successfully")
      this._route.navigate(["maindash/voucher"])
    })
  }
}
