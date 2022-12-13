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
    path:'',component:LoginComponent
  },
  {
    path:'dashboard',component:DashboardComponent
  },
  {
    path:'iq',component:InquiryComponent
  },
  {
    path:'salord',component:SalesOrderComponent
  },
  {
    path:'credit',component:CreditComponent
  },
  {
    path:'debit',component:DebitComponent
  },
  {
    path:'dllist',component:DeliveryListComponent
  },
  {
    path:'invoice',component:InvoiceComponent
  },
  {
    path:'pa',component:PaymentAgingComponent
  },
  {
  path:'**',component:ErrorPageComponent
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
