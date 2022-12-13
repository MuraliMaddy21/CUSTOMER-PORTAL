import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.component.html',
  styleUrls: ['./delivery-list.component.css']
})
export class DeliveryListComponent implements OnInit {



  result:any;
  items:any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    this.http.get('http://localhost:3030/cpdllist',{responseType:'json'}).subscribe((response)=>
   {
    console.log(response)
    this.result=response
    this.items=this.result['Envelope']['Body']['ZFM_DELIVERYLIST_CP_MDResponse']['IT_DELIVERY']['item']
    console.log(this.items)
    

})
}
}

