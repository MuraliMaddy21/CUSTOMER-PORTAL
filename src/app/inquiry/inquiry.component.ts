import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.css']
})
export class InquiryComponent implements OnInit {


  result:any="";
  items:any="";
  time:any="";
  constructor(private route:Router,private http:HttpClient) { }

  ngOnInit(): void {

    let date:Date= new Date()
    this.time=date;

    this.http.get('http://localhost:3030/getauth',{responseType:'json'}).subscribe((response)=>
    {
     console.log(response)
     this.result=response
     if(this.result==null)
     {
       window.alert("You haven't logged in!Redirecting to Login Page");
       this.route.navigate([""])
     }
    })

    this.http.get('http://localhost:3030/cpinquiry',{responseType:'json'}).subscribe((response)=>
    {
     console.log(response)
     this.result=response
     this.items=this.result['Envelope']['Body']['ZFM_INQUIRY_CP_MDResponse']['ZSD_INQ_T']['item']
     console.log(this.items)
    
     
  })

  }

  shutdown()
  {
    this.http.get('http://localhost:3030/shutdown',{responseType:'json'}).subscribe((data)=>
    {
      
    });
    
    this.route.navigate([""]);
  }

}


