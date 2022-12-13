import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CreditComponent } from './credit/credit.component';
import { DebitComponent } from './debit/debit.component';
import { DeliveryListComponent } from './delivery-list/delivery-list.component';
import { InquiryComponent } from './inquiry/inquiry.component';
import { SalesOrderComponent } from './sales-order/sales-order.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PaymentAgingComponent } from './payment-aging/payment-aging.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorPageComponent,
    DashboardComponent,
    CreditComponent,
    DebitComponent,
    DeliveryListComponent,
    InquiryComponent,
    SalesOrderComponent,
    InvoiceComponent,
    PaymentAgingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
