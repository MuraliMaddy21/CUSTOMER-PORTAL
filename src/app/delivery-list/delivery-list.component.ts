import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.component.html',
  styleUrls: ['./delivery-list.component.css']
})
export class DeliveryListComponent implements OnInit {



  result:any;
  items:any;
  filterdata:any=""
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

    this.http.get('http://localhost:3030/cpdllist',{responseType:'json'}).subscribe((response)=>
   {
    console.log(response)
    this.result=response
    this.items=this.result['Envelope']['Body']['ZFM_DELIVERYLIST_CP_MDResponse']['IT_DELIVERY']['item']
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


