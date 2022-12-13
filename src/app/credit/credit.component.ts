import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent implements OnInit {

  result:any;
  items:any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    this.http.get('http://localhost:3030/cpcredit',{responseType:'json'}).subscribe((response)=>
    {
     console.log(response)
     this.result=response
     this.items=this.result['Envelope']['Body']['ZFM_CREDIT_DEBIT_MEMO_CP_MDResponse']['IT_CRE']['item']
    console.log(this.items)
    
     
  })

}

}
