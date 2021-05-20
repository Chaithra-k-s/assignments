import { Component, OnInit } from '@angular/core';
import { AdvertiseService } from '../advertise.service';
import { User } from '../user';

@Component({
  selector: 'app-advertisement-form',
  templateUrl: './advertisement-form.component.html',
  styleUrls: ['./advertisement-form.component.css']
})
export class AdvertisementFormComponent implements OnInit {
  name="chaithra"
  submitted=false
  category=["Furniture","Hardware","Mobile"];
  userModel=new User("",this.name,123,"","");
  data=[];
  value:any;
  constructor(private advertise:AdvertiseService) { }
  onSubmit2(){
    this.submitted=false;
    this.userModel=new User("",this.name,123,"","");
  }
  onSubmit(){
    this.submitted=true;
    this.advertise.enroll(this.userModel).subscribe(data=> console.log("success!",data),
    error=>console.error("error!",error)
     )
   console.log(this.userModel)
   const value=this.advertise.enroll(this.userModel);
   console.log(value);
  }
ngOnInit(): void {
  }

}
