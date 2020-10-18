import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarInvoicesComponent } from './sidebar-invoices/sidebar-invoices.component';
import { SidebarInvoiceItemsComponent } from './sidebar-invoice-items/sidebar-invoice-items.component';
import { PreviewAreaComponent } from './preview-area/preview-area.component';
import { InvoiceItemComponent } from './invoice-item/invoice-item.component';
import { ActiveInvoiceComponent } from './active-invoice/active-invoice.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SidebarInvoicesComponent,
    SidebarInvoiceItemsComponent,
    PreviewAreaComponent,
    InvoiceItemComponent,
    ActiveInvoiceComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
