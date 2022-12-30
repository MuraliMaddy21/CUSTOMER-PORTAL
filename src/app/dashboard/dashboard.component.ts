import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  name:any="";
  customerid:any=""
  street:any=""
  name2:any=""
  city:any=""
  district:any=""
  state:any=""
  country:any=""
  telenum:any=""
  result:any
  postcode:any=""
  time:any=""
  constructor(private route:Router,private http:HttpClient) { }

  ngOnInit(): void {

 
    this.http.get("http://localhost:3030/cpprofile",{responseType:'json'}).subscribe((response)=>
    {
      console.log(response)
      this.result = response
      this.customerid = this.result['Envelope']['Body']['ZFM_PROFILE_CP_MDResponse']['E_CUS_PROFILE'].KUNNR
      if(this.customerid=="")
      {
        window.alert("Looks Like You haven't Logged in!Redirecting to login page")
        this.route.navigate([""]);
      }
      let date:Date= new Date()
      this.time=date;
      this.name = this.result['Envelope']['Body']['ZFM_PROFILE_CP_MDResponse']['E_CUS_PROFILE'].NAME_1
      this.name2 = this.result['Envelope']['Body']['ZFM_PROFILE_CP_MDResponse']['E_CUS_PROFILE'].NAME_2
      this.street = this.result['Envelope']['Body']['ZFM_PROFILE_CP_MDResponse']['E_CUS_PROFILE'].STREET
      this.country = this.result['Envelope']['Body']['ZFM_PROFILE_CP_MDResponse']['E_CUS_PROFILE'].COUNTRY
      this.state = this.result['Envelope']['Body']['ZFM_PROFILE_CP_MDResponse']['E_CUS_PROFILE'].STATE
      this.telenum = this.result['Envelope']['Body']['ZFM_PROFILE_CP_MDResponse']['E_CUS_PROFILE'].TELENUM
      this.city = this.result['Envelope']['Body']['ZFM_PROFILE_CP_MDResponse']['E_CUS_PROFILE'].CITY
      this.postcode = this.result['Envelope']['Body']['ZFM_PROFILE_CP_MDResponse']['E_CUS_PROFILE'].PS_CODE

  });
  }
}

