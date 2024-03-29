import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent implements OnInit {

  result:any;
  items:any;
  time:any="";
  spinner:any;

  constructor(private http:HttpClient,private route:Router) { }

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

    this.http.get('http://localhost:3030/cpcredit',{responseType:'json'}).subscribe((response)=>
    {
      if (Response) {
        this.hideloader();
    }
     console.log(response)
     this.result=response
     this.items=this.result['Envelope']['Body']['ZFM_CREDIT_DEBIT_MEMO_CP_MDResponse']['IT_CRE']['item']
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

