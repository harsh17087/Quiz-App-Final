import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  baseUrl = "https://api-3-bik5.onrender.com"
  
  constructor(private _http:HttpClient) { }

  // get request
  getRequest(tableName:any):Observable<any>{
    return this._http.get<any[]>(`${this.baseUrl}/${tableName}`)
  }

  // delete request
  deleteRequest(tableName:any,id:any):Observable<any>{
    console.log("deleteRequest executed")
    return  this._http.delete(`${this.baseUrl}/${tableName}/${id}`)
  }

  // post request

  postRequest(tableName:any,data:any):Observable<any>{
    return this._http.post(`${this.baseUrl}/${tableName}`,data)
  }

  // single user request
  singleUserGetRequest(tableName:any,id:any){
    return this._http.get(`${this.baseUrl}/${tableName}/${id}`)
  }

  // put request

  putRequest(tableName:any,id:any,data:any){
    return this._http.put(`${this.baseUrl}/${tableName}/${id}`,data)  
  }

  // sign In --- set user in session storage

  signIn(user:any){
    sessionStorage.setItem("user",user)
  }

  //Remove user from session storage

  signOut(){
    sessionStorage.clear()
  }
}
