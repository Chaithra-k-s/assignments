import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { NavigationExtras, Router, RouterLinkWithHref } from '@angular/router';
import { AdvertiseService } from '../advertise.service';
import { PeriodicElement,User } from '../user';
import { AdvertisementFormComponent } from "../advertisement-form/advertisement-form.component";

@Component({
  selector: 'app-advertisementtable',
  templateUrl: './advertisementtable.component.html',
  styleUrls: ['./advertisementtable.component.css']
})
export class AdvertisementtableComponent implements OnInit {
  constructor(private _http:HttpClient, private _advertise:AdvertiseService,private router:Router) { }
  displayedColumns: string[] = ['title', 'name', 'contact', 'category','description',"actions"];
  @Output() public childEvent=new EventEmitter();
 dataSource:any; 
 msg="hello"
rowid:any;
rowdetails:any
  ngOnInit(): void {
    this.dataSource=this._advertise.getuser()
    .subscribe(data=>this.dataSource=data);
     this._advertise.update(this.rowdetails,this.rowid)
  }
  value:any
  logdata(row:any){
    console.log(row);
  }
  show(){
        if (this.value){
          return "hidden"
        } 
     return null
     }
edit(row:object,j:number){
    console.log(j);
    console.log(typeof(j));
   // this._advertise.update(row,j);
    this.rowdetails=row;
    this.rowid=row;
    this.value=row;
    this._advertise.update(row,j);
  //  this.router.navigate(["app-edit-product-component","j"])
  //   let navigationExtras:NavigationExtras={
  //     queryParams:{
  //       rowid:j,
  //       rowdetails:row
  //     }
  //   }
  //   this.router.navigate(['app-edit-product-component'],navigationExtras)
      // console.log(j);
      // console.log(typeof(j));
      // console.log(row);
      // console.log(typeof(row));
    //   this._advertise.communicateObject(row)
     this.childEvent.emit([row,j]);
 }

delete(col:any){
  console.log(col);
  this.dataSource=this._advertise.deleteuser(col)
    .subscribe(data=>this.dataSource=data);
}
}
