import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-sales-order',
  templateUrl: './sales-order.component.html',
  styleUrls: ['./sales-order.component.css']
})
export class SalesOrderComponent implements OnInit {

  items:any="";
  result:any="";
  time:any="";
  filterdata:any="";
  spinner:any;

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

    this.http.get('http://localhost:3030/cpsalord',{responseType:'json'}).subscribe((response)=>
    {
      if (Response) {
        this.hideloader();
    }
     console.log(response)
     this.result=response
     this.items=this.result['Envelope']['Body']['ZFM_SALESORDER_CP_MDResponse']['E_SALESORDER']['item']
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
  hideloader()
  {
    this.spinner=document.getElementById('loading');
    this.spinner .style.display = 'none';
    
  }

}

