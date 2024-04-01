import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import {MatSidenavModule,} from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from "@angular/material/toolbar"
import { GlobalService } from '../../shared/services/global.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-maindash',
  standalone: true,
  imports: [RouterOutlet, MatSidenavModule,MatListModule,MatIconModule,MatToolbarModule,RouterModule],
  templateUrl: './maindash.component.html',
  styleUrl: './maindash.component.css'
})
export class MaindashComponent {

  constructor(private _globalSer:GlobalService,private _router:Router){}
  showName:any=sessionStorage.getItem('user')
  
  logOut(){
    if(window.confirm("Are you sure to log out")){
      this._globalSer.signOut()
      this._router.navigate(['quizappdashboard'])
    }
  }
}
