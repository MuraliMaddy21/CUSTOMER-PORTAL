import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx'
@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  result: any;
  items: any;
  time: any = "";
  filterdata: any = ""
  fileName= 'ExcelSheet.xlsx';

  constructor(private http: HttpClient, private route: Router) {
  }

  ngOnInit(): void {

    let date: Date = new Date()
    this.time = date;

    this.http.get('http://localhost:3030/getauth', { responseType: 'json' }).subscribe((response) => {
      console.log(response)
      this.result = response
      if (this.result == null) {
        window.alert("You haven't logged in!Redirecting to Login Page");
        this.route.navigate([""])
      }
    })

    this.http.get('http://localhost:3030/cpinvoice', { responseType: 'json' }).subscribe((response) => {
      console.log(response)
      this.result = response
      this.items = this.result['Envelope']['Body']['ZFM_INVOICE_CP_MDResponse']['IT_INVOICE']['item']
      console.log(this.items)


    })
  }


  shutdown() {
    this.http.get('http://localhost:3030/shutdown', { responseType: 'json' }).subscribe((data) => {

    });

    this.route.navigate([""]);
  }

  print() {
    this.http.get('http://localhost:3030/pdf', { responseType: 'json' }).subscribe((data) => {
      console.log(data);
    });
  }

  exportexcel(): void {
    let element = document.getElementById('excel-table'); 
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
     const wb: XLSX.WorkBook = XLSX.utils.book_new(); 
     XLSX.utils.book_append_sheet(wb, ws, 'Sheet1'); 
     XLSX.writeFile(wb, this.fileName); }

}


