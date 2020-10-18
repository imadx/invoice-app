import { Component, OnInit } from '@angular/core';
import { InvoiceService } from './invoice.service';
import { Invoice } from './types/invoice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'invoice-app';

  invoices: Invoice[];
  activeInvoice: Invoice;

  constructor(private invoiceService: InvoiceService) {}

  ngOnInit() {
    this.getInvoices();
  }

  setActiveInvoice(invoice) {
    console.log('AppComponent -> setActiveInvoice -> invoice', invoice);
    this.activeInvoice = invoice;
  }

  getInvoices() {
    this.invoiceService
      .getInvoices()
      .subscribe((invoices) => (this.invoices = [...invoices]));
  }

  invoicesUpdated() {
    console.log('AppComponent -> invoicesUpdated -> invoicesUpdated');
    this.getInvoices();
  }
}
