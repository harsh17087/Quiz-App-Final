import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GlobalService } from '../../../shared/services/global.service';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-result-dashboard',
  standalone: true,
  imports: [CommonModule,NgxPaginationModule],
  templateUrl: './result-dashboard.component.html',
  styleUrl: './result-dashboard.component.css'
})
export class ResultDashboardComponent {
  resultArray:any
  p:number=1
  constructor(private _globalSer:GlobalService){}
  
  ngOnInit(){
    this._globalSer.getRequest('results').subscribe((res)=>{
      this.resultArray=res
      
    })
  }
}
