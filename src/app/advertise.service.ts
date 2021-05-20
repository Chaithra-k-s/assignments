import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { PeriodicElement, User } from './user';
import { Observable,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdvertiseService {
  $isloggedin=new EventEmitter();
  senddata=new Subject();
  sendObject=new Subject();

_url="http://localhost:3000/registered";

  constructor(private _http:HttpClient) { }
  enroll(user:User){
    return this._http.post(this._url,user)
  }
  getuser():Observable<PeriodicElement[]>{
    return this._http.get<PeriodicElement[]>("http://localhost:3000/")
  }
  deleteuser(user1:number):Observable<PeriodicElement[]>{
    return this._http.delete<PeriodicElement[]>("http://localhost:3000/"+user1)
  }
  temp:any;

  update(row:object,user1:number):Observable<PeriodicElement[]>{
    this.temp=row;
    return this._http.post<PeriodicElement[]>(this._url,[user1,row])
  // return this._http.get<PeriodicElement[]>("http://localhost:3000/registered/"+user1)
  }

  login(){
    console.log("login service");
  }

  public rowdetails="";
  public rowid=1000;
  communicateObject(obj:object){
    this.sendObject.next(obj)
  }



  // update(row:object,user1:number){
  // this.senddata.next(row)
  // }


  
  // updateuser(user1:any):Observable<PeriodicElement[]>{
  //   return this._http.patch<PeriodicElement[]>("http://localhost:3000/"+this.rowid,user1)
  // }

}
