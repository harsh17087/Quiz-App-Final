import { Component } from '@angular/core';
import { GlobalService } from '../../../shared/services/global.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
@Component({
  selector: 'app-voucher-dashboard',
  standalone: true,
  imports: [CommonModule,RouterModule,NgxPaginationModule],
  templateUrl: './voucher-dashboard.component.html',
  styleUrl: './voucher-dashboard.component.css'
})


// ngOnInit(){
//   this.getData()
// }

// getData(){
//   this._dbSer.fetchUserData().subscribe((res)=>{
//     // console.log(res)
//     this.userData=res
//   })
// }

// deleteData(id:any){
  
//   if(window.confirm(`Are you sure to delete user with id :${id}`)){
//     this._dbSer.deleteUser(id).subscribe((res)=>{})
//   window.alert("User deleted succesfully")
//   this.getData()
//   }
  
  
// }




export class VoucherDashboardComponent {
  voucherArray:any
  p:number=1
  adminLogin:boolean=sessionStorage.getItem('user')=="harsh@gmail.com" ? true:false

  
  constructor(private _globalSer:GlobalService){}
  
  ngOnInit(){
    this.getData()
  }

  getData(){
    this._globalSer.getRequest('vouchers').subscribe((res)=>{
      this.voucherArray=res
    })
  }

  deleteData(id:any){
    
    if(window.confirm(`Are you sure to delete voucher with id :${id}`)){
      this._globalSer.deleteRequest('vouchers',id).subscribe((res)=>{})
    window.alert("Voucher deleted succesfully")
    this.getData()
    }  
  }
}
