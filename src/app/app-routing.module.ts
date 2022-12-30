import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditComponent } from './credit/credit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DebitComponent } from './debit/debit.component';
import { DeliveryListComponent } from './delivery-list/delivery-list.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { InquiryComponent } from './inquiry/inquiry.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { LoginComponent } from './login/login.component';
import { PaymentAgingComponent } from './payment-aging/payment-aging.component';
import { SalesOrderComponent } from './sales-order/sales-order.component';

const routes: Routes = [

  {
    path:'',component:LoginComponent,title:'Login-Page'
  },
  {
    path:'dashboard',component:DashboardComponent,title:'Dashboard'
  },
  {
    path:'iq',component:InquiryComponent,title:'Inquiry'
  },
  {
    path:'salord',component:SalesOrderComponent,title:'Sales-Order'
  },
  {
    path:'credit',component:CreditComponent,title:'Credit'
  },
  {
    path:'debit',component:DebitComponent,title:'Debit'
  },
  {
    path:'dllist',component:DeliveryListComponent,title:'Delivery-List'
  },
  {
    path:'invoice',component:InvoiceComponent,title:'Invoice'
  },
  {
    path:'pa',component:PaymentAgingComponent,title:'Payment-Aging'
  },
  {
  path:'**',component:ErrorPageComponent,title:'Error-Page'
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
