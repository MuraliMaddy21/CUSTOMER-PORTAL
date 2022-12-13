import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-debit',
  templateUrl: './debit.component.html',
  styleUrls: ['./debit.component.css']
})
export class DebitComponent implements OnInit {
 

  result:any;
  items:any;

  constructor(private http:HttpClient)
  {}

  ngOnInit(): void {

    this.http.get('http://localhost:3030/cpcredit',{responseType:'json'}).subscribe((response)=>
    {
     console.log(response)
     this.result=response
     this.items=this.result['Envelope']['Body']['ZFM_CREDIT_DEBIT_MEMO_CP_MDResponse']['IT_DEB']['item']
    console.log(this.items)
    
     
  })


    
  }

}
