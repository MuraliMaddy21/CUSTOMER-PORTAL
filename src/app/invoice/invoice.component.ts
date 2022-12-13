import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  result:any;
  items:any;

  constructor(private http:HttpClient) {
   }

  ngOnInit(): void {

    this.http.get('http://localhost:3030/cpinvoice',{responseType:'json'}).subscribe((response)=>
   {
    console.log(response)
    this.result=response
    this.items=this.result['Envelope']['Body']['ZFM_INVOICE_CP_MDResponse']['IT_INVOICE']['item']
    console.log(this.items)
    

})
}
}
